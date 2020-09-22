# How to start a new project
* create a react app 
* from scratch

# creating new project from scratch 14092020
* npm needed
* npm init
* npm install 
    ** wepback, webpack-cli, 
    ** babel (loader, preset, preset-react, core), 
    ** typescript-preset, 
    ** react, react-dom, @types/react, @types/react-dom
* configure presets in babel.config.json
* configure webpack (alternatives gulp makefiles / parcel / rollup) = bundlers
* add an index.html at root level and add at least a div with an id and  a script tag pointing to the bundle file 
* add a dist (distribution) directory at root level for the bundle (it must be set in webpack.config.js)
* in package.json add a build script with "webpack" command in it
* add an index.tsx (tsx and jsx accept html tags) in a src directory
* import react and reactdom in index.tsx and call render() method to add a first element in index.html
* npm run build then press go live to see the result in a browser at http://127.0.0.1:5500/

# creating a component