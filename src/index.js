/* eslint-disable */
import SimpleButton from './components/SimpleButton.vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
// import Vue from 'vue'
// Exportación de los componentes individualmente
export { SimpleButton }

// Instalación de la librería como un plugin
export function install(Vue) {
  Vue.component('SimpleButton', SimpleButton)
  Vue.use(Vuetify)
}

if (typeof window !== 'undefined' && window.Vue) {
  Vue.use({ install });
}

// Exportación de la librería como plugin
export default { install: install }

