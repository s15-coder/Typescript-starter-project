# TypeScript Node.js Starter Server

This is a basic TypeScript server using Node.js, intended to serve as a starter project due to its pre-configured setup.

## Prerequisites
Before getting started, ensure you have the following dependencies installed globally:
- [Node.js](https://nodejs.org/)
- [TypeScript](https://www.typescriptlang.org/) (globally installed)
- [Nodemon](https://nodemon.io/) (globally installed)

## Getting Started
To start using this project, follow these steps:

1. **Clone the project:**
    ```
    git clone git@github.com:s15-coder/Typescript-starter-project.git
    ```
   
2. **Install dependencies:**
    ```
    npm install
    ```

3. **Compile TypeScript files:**
    ```
    tsc --watch
    ```
   This command will watch for changes made to TypeScript files within the `src/` folder and recompile them accordingly.

4. **Run the server with Nodemon:**
    ```
    nodemon dist/app.js
    ```
   Nodemon will monitor changes within the `dist/` folder and automatically restart the server when necessary.

## Contributing
Contributions are welcome! Feel free to submit pull requests or open issues.

## License
This project is open source and distributed under the [MIT License](LICENSE). Feel free to use, modify, and distribute this code without restrictions.
