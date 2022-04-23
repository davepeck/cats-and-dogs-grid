# 🐱 And 🐶 Boilerplate

Version `0.0.2` by `Ellie` and Daddy aka `Dave Peck <davepeck@gmail.com>`.

### What is this?

The goal for 🐱 and 🐶 is to be an absurdly simple "modern" front-end boilerplate that's perfect for learning. My daughter and I use it to explore React and TypeScript website development.

When you make changes to the `main` branch and push them to GitHub, they are _automagically_ deployed to [GitHub Pages](https://pages.github.com). It just works!

Hopefully 🐱 and 🐶 baked enough that you (and your kids) can mostly focus on putting code in the `src/` directory and can ignore the rest. You'll probably want to start by editing `app.tsx` and `index.css`.

### Getting set up

You'll need to install [Node 16](https://nodejs.dev). I use [asdf](https://asdf-vm.com) to do this, but there are lots of ways (`brew install node@16` works, if you're using macOS and [Homebrew](https://brew.sh)!)

Use `git` to clone this repository:

```
> git clone --depth=1 --branch=main git@github.com:davepeck/cats-and-dogs-boilerplate my-project
> cd my-project
> rm -rf .git
> npm install
> echo LETS DANCE CATS AND DOGS
```

🐱 and 🐶 Boilerplate has built-in support for [VS Code](https://code.visualstudio.com) and comes with some very basic settings suggestions (see [`.vscode/settings.json`]())

### How do I run the code I'm writing?

Just use `npm run start` and visit http://localhost:1234/. It'll automatically refresh when you change most app content.

### How do I deploy the code I've written?

It's super easy!

Push your code to a new repistory on GitHub and enable [GitHub Pages]() for that repository. (You can do this by visiting the repository's main page, clicking on `Settings`, and then clicking on `Pages`.)

Every time you push to the `main` branch after that, the [built-in](./.github/workflows/github-pages.yml) [GitHub Actions](https://github.com/features/actions) will deploy to [GitHub Pages](https://pages.github.com) by running `npm run build` and, if successful, placing the contents of the `./dist/` directory into the root of the `gh-pages` branch. 

If you have a file named `CNAME` in the top-level of your `main` branch, that `CNAME` will also be used in the `gh-pages` branch.

### Contributing

Please do!

The goal for 🐱 and 🐶 is to be a simple-enough-but-no-simpler "modern" front-end boilerplate.

My original goal was to include as little as possible while still supporting React, TypeScript, and instant deployment to GitHub Pages. I went a tiny bit further. Perhaps that's good. Perhaps not.

If I were to remove something that's currently in the box, it'd probably be SCSS. (I like it, though. I considered adding [Tailwind](https://tailwindcss.com) but decided that was definitely too much for a true bare bones boilerplate.)

If I were to add something that's not currently in the box, it'd probably be [jest](https://jestjs.io). (I hear testing is a thing, even for simple projects.)

If there's something in the box that I'm currently ambivalent about, it's all the linting/formatting tools, choices, and enforcement.

So... if something 🐱 feels missing to you, please submit a PR that adds it. And if something 🐶 feels extraneous to you, please submit a PR that removes it. Thanks!

### What's in the box?

This template:

- Uses [ParcelJS 2](https://parceljs.org) for bundling
- Includes [React 17](https://reactjs.org)
- Includes [TypeScript 4](https://www.typescriptlang.org)
- Contains out-of-the-box configuration for [VS Code](https://code.visualstudio.com) that lints and formats on every save with VSCode's built-in rules
- Includes [modern-normalize](https://github.com/sindresorhus/modern-normalize)
- Has built-in [GitHub Actions](https://github.com/features/actions) to automatically deploy changes to the main branch to [GitHub Pages](https://pages.github.com), a static web host.
- Has a [asdf](https://asdf-vm.com) `.tool-versions` file if you happen to like to install `node` and friends using that tool

