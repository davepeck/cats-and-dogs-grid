# 🐱 And 🐶 Boilerplate

Version `0.0.1` by `Ellie` and Daddy aka `Dave Peck <davepeck@gmail.com>`.

### What is this?

This is a super-simple template for my daughter and I to explore modern front-end programming. It uses React and TypeScript and generates a static website.

Use `npm run start` to run a local dev server on http://localhost:1234/

All code lives in `src/`. You'll probably want to start by editing `app.tsx` and `index.scss`.

This template has built-in [GitHub Actions](https://github.com/features/actions) that automatically build and deploy any changes you make to the `main` branch directly to [GitHub Pages](https://pages.github.com). That means you may never need to think about deployment; it just works!

### How can I use this?

Use `git` to clone it:

```
> git clone --depth=1 --branch=main git@github.com:davepeck/cats-and-dogs-boilerplate my-project
> cd my-project
> echo CATS AND DOGS PARTY
```

We've got built-in support for [VS Code](https://code.visualstudio.com). You'll want to install the recommended extensions:

- [EditorConfig](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [StyleLint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

Then simply:

```
> npm install
> code my-project
> npm run start
```

### How can I deploy the code I write?

By default, every time you push to the `main` branch, the built-in [GitHub Actions](https://github.com/features/actions) will deploy to [GitHub Pages](https://pages.github.com) by running `npm build` and, if successful, placing the contents of the `./dist/` directory into the root of the `gh-pages` branch. 

If you have a file named `CNAME` in the top-level of your `main` branch, that `CNAME` will also be used in the `gh-pages` branch. You get instant deployment of static websites!

### What's in the box?

This template:

- Uses [ParcelJS 2](https://parceljs.org) for bundling
- Uses [SCSS](https://sass-lang.com) for styles
- Includes [React 17](https://reactjs.org)
- Includes [TypeScript 4](https://www.typescriptlang.org)
- Lints and formats with [ESLint](https://eslint.org) and [Prettier](https://prettier.io)
- Contains out-of-the-box configuration for [VS Code](https://code.visualstudio.com)
- Includes [modern-normalize](https://github.com/sindresorhus/modern-normalize)
- Has built-in [GitHub Actions](https://github.com/features/actions) to automatically deploy changes to the main branch to [GitHub Pages](https://pages.github.com), a static web host.
- Has a [asdf](https://asdf-vm.com) `.tool-versions` file if you happen to like to install `node` and friends using that tool
