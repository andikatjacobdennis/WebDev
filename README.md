# WebDev

This repository contains two simple demo HTML files:

1. `html-css-demo.html` - Demonstrates basic HTML and CSS usage.
2. `javascript-demo.html` - Showcases JavaScript functionality within an HTML page.

## File Descriptions

### 1. html-css-demo.html

This file is a demonstration of fundamental HTML structure and CSS styling. It includes:

- Basic HTML elements such as headings, paragraphs, lists, and links.
- CSS styling to enhance the page appearance, including colors, fonts, and layout.
- A responsive design to ensure usability across different screen sizes.

#### How to View:

Simply open `html-css-demo.html` in a web browser.

### 2. javascript-demo.html

This file showcases basic JavaScript interactions within an HTML document. It features:

- JavaScript event listeners for user interactions.
- DOM manipulation techniques to modify page content dynamically.
- Basic scripting concepts such as functions, loops, and conditionals.

#### How to Run:

Open `javascript-demo.html` in a web browser. Make sure JavaScript is enabled for full functionality.

## Getting Started

To try out these demos:

1. Clone this repository or download the files.
2. Open the `.html` files in a modern web browser.
3. Experiment with modifying the code to see how changes affect the output.

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6)

## License

This project is open-source and available under the MIT License. Feel free to use and modify the code as needed.

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
