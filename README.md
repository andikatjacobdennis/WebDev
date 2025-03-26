# WebDev

Web Devevelopment by practice

# Installing TypeScript and Compiling TypeScript to JavaScript

Here are the commands to install TypeScript and use a JavaScript configuration file to compile all TypeScript files to JavaScript:

## 1. Install TypeScript

First, install TypeScript globally (recommended for command line use):

```bash
npm install -g typescript
```

Or install it locally in your project as a development dependency:

```bash
npm install typescript --save-dev
```

## 2. Initialize TypeScript Configuration

Create a `tsconfig.json` file (TypeScript configuration file):

```bash
tsc --init
```

## 4. Compile TypeScript to JavaScript

To compile all TypeScript files to JavaScript using the configuration:

For JSON configuration (tsconfig.json):

```bash
tsc
```

For JavaScript configuration (tsconfig.js):

```bash
tsc --project tsconfig.js
```

## 5. Watch Mode (Continuous Compilation)

To automatically recompile when files change:

For JSON configuration:

```bash
tsc --watch
```

For JavaScript configuration:

```bash
tsc --project tsconfig.js --watch
```
