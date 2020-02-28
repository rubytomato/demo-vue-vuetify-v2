# demo-vue-vuetify-v2

Vuetify.js Component Demonstration.

**GitHub Pages**

https://rubytomato.github.io/demo-vue-vuetify-v2/

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

### Vuetify

```
$ vue add vuetify
```

```
+ vue-cli-plugin-vuetify@2.0.3
added 4 packages from 7 contributors and audited 24722 packages in 16.212s
```

### eslint-plugin-vuetify

```
$ npm install eslint-plugin-vuetify -D
```

```js
// .eslintrc.js
module.exports = {
  plugins: ["vuetify"],
  rules: {
    "vuetify/no-deprecated-classes": "error"
  }
};
```

### Install Material Design Icons

```
$ npm install @mdi/font -D
```

```
+ @mdi/font@4.8.95
added 1 package from 1 contributor and audited 26903 packages in 15.103s
```

```js
// src/plugins/vuetify.js

import "@mdi/font/css/materialdesignicons.css"; // Ensure you are using css-loader
import Vue from "vue";
import Vuetify from "vuetify/lib";

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: "mdi" // default - only for display purposes
  }
});
```
