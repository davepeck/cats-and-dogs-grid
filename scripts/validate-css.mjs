// Run validation on all CSS and SCSS files whose behavior exactly matches 
// whatever VSCode does out-of-the-box on a fresh install, by explicitly calling 
// methods on VSCode's CSS Language Service.
import fs from "fs";
import path from "path";
import url from "url";

import { getCSSLanguageService, getSCSSLanguageService } from "vscode-css-languageservice";
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

/** Recursively walk a directory, returning all *.scss files. */
const findSCSSFiles = (dir) => findMatchingFiles(dir, /\.scss$/);

/** Recursively walk a directory, returning all *.css or *.scss files. */
const findCSSOrSCSSFiles = (dir) => findMatchingFiles(dir, /\.(css|scss)$/);

/** Format a position in a given file. */
const formatPosition = (path, position) =>
  `${path}:${position.line + 1}:${position.character + 1}`;

/** Format a single diagnostic in a human-friendly fashion. */
const formatDiagnostic = (diagnostic) =>
  `${formatPosition(diagnostic.path, diagnostic.range.start)} [${severities[diagnostic.severity]}] ${diagnostic.message} ${diagnostic.source}(${diagnostic.code})`;

// Get the language servicees for CSS and SCSS.
const services = {
  "css": getCSSLanguageService(),
  "scss": getSCSSLanguageService(),
}

// Walk through all target files, generating diagnostics for each.
const diagnostics = findCSSOrSCSSFiles(process.argv[2]).flatMap(path => {
  const lintUrl = url.pathToFileURL(path);
  const lintText = fs.readFileSync(path, "utf8");
  const language = path.match(/\.scss$/) ? "scss" : "css";
  const service = services[language];
  const document = TextDocument.create(lintUrl.toString(), language, 0, lintText);
  const validation = service.doValidation(document, service.parseStylesheet(document));
  return validation.map((diagnostic) => ({ ...diagnostic, path }));
});

// Print out the diagnostics, if any.
if (diagnostics.length > 0) {
  console.error(diagnostics.map(diagnostic => formatDiagnostic(diagnostic)).join("\n"));
  process.exit(1);
}
