import fs from "fs";
import path from "path";
import url from "url";

import { getCSSLanguageService } from "vscode-css-languageservice";
import { TextDocument } from "vscode-languageserver-textdocument";

/** Human-readable names for the potential diagnostic severities returned. */
const severities = { 1: "ERR", 2: "WARN", 3: "INFO", 4: "HINT" };

/** Recursively walk a directory, returning all found files. */
const findFiles = (dir) => {
    const files = fs.readdirSync(dir);
    return files.flatMap((file) => {
        var filepath = path.join(dir, file);
        const stats = fs.statSync(filepath);
        if (stats.isDirectory()) {
            return findFiles(filepath);
        } else if (stats.isFile()) {
            return [filepath];
        }
    });
};

/** Recursively walk a directory, returning all found files matching a given regex. */
const findMatchingFiles = (dir, regex) => findFiles(dir).filter((filePath) => regex.test(filePath));

/** Recursively walk a directory, returning all *.css files. */
const findCSSFiles = (dir) => findMatchingFiles(dir, /\.css$/);

/** Format a position in a given file. */
const formatPosition = (position, filePath) =>
    `${filePath}:${position.line + 1}:${position.character + 1}`;

/** Format a single diagnostic in a human-friendly fashion. */
const formatDiagnostic = (diagnostic, filePath) =>
    `${formatPosition(diagnostic.range.start, filePath)} [${severities[diagnostic.severity]}] ${diagnostic.message} ${diagnostic.source}(${diagnostic.code})`;

// Get the language service for CSS.
const service = getCSSLanguageService();

// Walk through all target files, generating diagnostics for each.
const diagnostics = findCSSFiles(process.argv[2]).flatMap(filePath => {
    const lintUrl = url.pathToFileURL(filePath);
    const lintText = fs.readFileSync(filePath, "utf8");
    const lintDocument = TextDocument.create(lintUrl.toString(), "css", 0, lintText);
    const validation = service.doValidation(lintDocument, service.parseStylesheet(lintDocument));
    return validation.map(diagnostic => formatDiagnostic(diagnostic, filePath));
});

// Print out the diagnostics, if any.
if (diagnostics.length > 0) {
    console.error(diagnostics.join("\n"));
    process.exit(1);
}
