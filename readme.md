Progressive JS example using React
=====================

This minimal app demonstrate rendering React components on the server and the front end

## Libraries used:

- [React](https://facebook.github.io/react/)
- [React Router](https://github.com/rackt/react-router)
- [Node](https://nodejs.org/)
- [Webpack](http://webpack.github.io/)
- [Marty.js](http://martyjs.org/) for Flux
- [Babel](https://babeljs.io/) for ES6
- [Imm](https://github.com/sporto/imm) for immutable data structures

## Demos:

- Render different routes on the server ✔
- Pass parameters to the backend in the query string ✔
- Pre fetch information on the server ✔
- Demostrate a form with AJAX and without (TO DO)

## Setup dev:

```
npm install
npm install nodemon -g
npm install -g foreman
```

## During development

### Run Webpack with

```
webpack --watch
```

### To server Node front-end

```
nodemon
```

### Or run both with:

```
nf start
```



