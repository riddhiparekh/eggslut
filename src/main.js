// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import * as VueGoogleMaps from 'vue2-google-maps'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VModal from 'vue-js-modal'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/css/font-awesome.min.css'
import './assets/css/style.scss'
import './assets/js/wow.min.js'
import VueLazyload from 'vue-lazyload'

Vue.use(BootstrapVue)
Vue.use(VModal) 
Vue.use(VueAxios, axios)
Vue.use(VueLazyload)
Vue.use(VueGoogleMaps, {
  load: {
    key: 'google-maps-api-key-here',
    libraries: 'places'
  }
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
