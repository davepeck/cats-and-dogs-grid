# 🐱 And 🐶 Boilerplate

Version `0.0.3` by `Ellie` and Daddy aka `Dave Peck <davepeck@gmail.com>`.

### What is this?

🐱 and 🐶 boilerplate makes it super simple to write _and_ deploy simple React + TypeScript front-end sites. My daughter and I use it to play with "modern" web development.

🐱 and 🐶 _automagically_ deploys to the real web! When you make changes to the `main` branch and push them to GitHub they are tested and, if successful, automatically deployed (see below).

🐱 and 🐶 is best with a clean install of [VSCode](https://code.visualstudio.com). The rule is this: if a fresh install of VSCode flags errors in your code, it won't pass its tests, and therefore won't deploy. On the other hand, if a fresh install of VSCode is happy with your code, then tests _will_ pass.

### Getting set up

You'll need to install [Node 16](https://nodejs.dev).

There are lots of ways to do this; it depends on your own set-up.

Then clone this repository, `npm install`, change the `CNAME` to the name of the website you want to deploy to, and get coding on `app.tsx` and `index.scss`.

### How do I run a development server?

Use `npm run start` and visit http://localhost:1234/. It'll automatically refresh when you change most app content.

### How do I deploy the code I've written?

It's super easy!

Push your code to a new repistory on GitHub and enable [GitHub Pages](https://pages.github.com) for that repository. (You can do this by visiting the repository's main page, clicking on `Settings`, and then clicking on `Pages`.)

Every time you push to the `main` branch after that, the [built-in](./.github/workflows/github-pages.yml) [GitHub Actions](https://github.com/features/actions) will deploy to [GitHub Pages](https://pages.github.com) by running `npm run ci` to test, and then `npm run build`. If both are successful, the contents of the `./dist/` directory are placed into the root of the `gh-pages` branch.

If you have a file named `CNAME` in the top-level of your `main` branch, that `CNAME` will also be used in the `gh-pages` branch.

### Contributing

Please do!

The goal for 🐱 and 🐶 is to be the simplest possible "modern" front-end boilerplate. We want be as minimal as possible while still supporting React, TypeScript, SCSS, and instant deployment to GitHub Pages.

If I were to add something that's not currently in the box, it'd probably be [jest](https://jestjs.io). If I were to remove something, it might be SCSS.

If something 🐱 feels missing to you, please submit a PR that adds it. And if something 🐶 feels extraneous to you, please submit a PR that removes it. Thanks!

### What's in the box?

This template:

- Uses [ParcelJS 2](https://parceljs.org) for bundling
- Includes [React 17](https://reactjs.org)
- Includes [TypeScript 4](https://www.typescriptlang.org)
- Contains out-of-the-box configuration for [VS Code](https://code.visualstudio.com) that lints and formats on every save with VSCode's built-in rules
- Includes [modern-normalize](https://github.com/sindresorhus/modern-normalize)
- Has built-in [GitHub Actions](https://github.com/features/actions) to automatically deploy changes to the main branch to [GitHub Pages](https://pages.github.com), a static web host.
- Has a [asdf](https://asdf-vm.com) `.tool-versions` file if you happen to like to install `node` and friends using that tool
