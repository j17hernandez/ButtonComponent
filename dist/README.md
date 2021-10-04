# test-vuetify
To generate the dist folder, run the following command
```
npx vue-cli-service build --target lib --name test-vuetify src/index.js

```
```
npm publish --access=public

```


| Prop                  | Type            | Default     | Description                              |
|-----------------------|-----------------|-------------|------------------------------------------|
| color                 | String          | ''          | Property for button color                |
| icon                  | Boolean         | false       | Property for button icon                 |
| text                  | Boolean         | false       | Property for button text                 |
| outlined              | Boolean         | false       | Property for button outlined             |
| disabled              | Boolean         | false       | Property for button disabled             |
| rounded               | Boolean         | false       | Property for button rounded              |
| loading               | Boolean         | false       | Property for button loading              |
| fab                   | Boolean         | false       | Property for button fab                  |
| rounded               | Boolean         | false       | Property for button rounded              |
| @click                | Function|event  | ()=>{}      | Property for button function             |
| @dblclick             | Function|event  | ()=>{}      | Property for button function             |


## Example

```js
import Vue from "vue";
import { SimpleButton } from '@j17hernandez/button-component'

// You can use this
Vue.component("SimpleButton", SimpleButton);

const app = new Vue({
  el: "#app",
  // Or use components the vue property
  components:{
    SimpleButton
  },
  data: {
    name: 'Simple Button'
  },
  methods: {
      click() {
          console.log('Diste click')
      }
  }
});
```

In your HTML call it like

```html
<SimpleButton color="primary" @click="click"> {{ name }} </SimpleButton>
```
