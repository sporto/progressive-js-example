Progressive JS example using React
=====================

This minimal app demonstrate rendering React components on the server and the front end

This demo uses:

- React
- React Router
- Node
- Webpack
- Superagent for AJAX
- Marty.js for Flux

## TODO

- Render different routes on the server ✔
- Pass parameters to the backend in the query string ✔
- Pre fetch information on the server (Not much luck with this yet as components render sync)
- Demostrate a form with AJAX and without

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



