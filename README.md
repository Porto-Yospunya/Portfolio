# Portfolio
 
Introduce myself and show my project.

<br>

## Client
 - ReactJS
 - Tailwindcss
### Install Command
 ```
 $ npm install -D tailwindcss postcss autoprefixer
 ```
 ```
 $ npm install react-router-dom react-icons devicon axios
 ```

### Tailwind setup
```
$ npx tailwindcss init
```

#### tailwindcss.config.js
``` javascript
/** @type {import('tailwindcss').Config} */
export const content = [
  "./src/**/*.{js,jsx,ts,tsx}",
];
export const theme = {
  extend: {},
};
export const plugins = [];
```

#### postcss.config.js
``` javascript
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

#### index.css
``` css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

<br>

## Server
 - NodeJS
 - Typescript

### Initialize server
```
$ npm init
```

### Install Command
```
$ npm install -D @types/express @types/body-parser @types/cors @types/mongoose @types/dotenv @types/node ts-node dotenv nodemon
```
```
$ npm install express body-parser cors mongoose
```

#### package.json
``` json
"scripts": {
  "dev": "nodemon server.js"
},
```


<br>

## Database
 - MongoDB