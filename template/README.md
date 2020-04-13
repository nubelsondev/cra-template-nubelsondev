<div align="center" ><img  src="./src/images/logo.svg"></div>

# A quick start Styled-components + Layout Create React App template

A quick start [Create React App](https://github.com/facebook/create-react-app) (CRA) _template_ with configured [**Styled-components**](https://styled-components.com/) and **Layout** configuration.

## 👨‍💻 Usage

```bash
npx create-react-app your-project-name --template nubelsondev
```

Or

```bash
yarn create react-app your-project-name --template nubelsondev
```

`npx` command installs the most recent stable version of CRA from npm.

`--template` parameter points to this template, note that `cra-template-` prefix is omitted.

## 🧠 Motivation

You know how boring it is to have to configure your project every time you develop a new application. Does she need Styled-Components? Ok, you install the library and configure all the global styling, create the theme and mediaQueries files and then you have to create a Layout component so that all of this works correctly. What if we could have it all ready at the beginning of the project? I want to focus on developing the application and not waste my time configuring it. That's why I created this template.

## ⚙️ Available Scripts

In the project directory, you can run:

-   `yarn start` - runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

*   `yarn build` - builds the app for production to the `build` folder.

*   `yarn eject` - exposes content of `react-script` package

Due to CRA template limitations (we can change only `scripts` and `dependencies` inside generated `package.json`) all configuration is done by adding config files where possible. Also no `devDependencies` for now, sorry.

## 💅 Styled-Components configuration

This template provides a complete configuration with Styled-Components including global styling, mediaQueries and 1 standard theme that are added to the Layout of the application using ThemeProvider.

## How to create custom Create React App (CRA) templates

I created a step by step guide on how to create your own templates. Check it

[My personal Blog](https://blog.nubelson.dev/create-your-own-create-react-app-template)

---

<p align="center" >© 2020 <br>
With ❤️ and ☕ by <br> 
Nubelson Fernandes</p>
