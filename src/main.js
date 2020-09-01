import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/axios'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import store from './store'
import SlideUpDown from 'vue-slide-up-down';
window.$ = window.jQuery = require('jquery');
import { BootstrapVue} from 'bootstrap-vue'

Vue.config.productionTip = false;
// Install BootstrapVue
Vue.use(BootstrapVue)

Vue.component('slide-up-down', SlideUpDown);
new Vue({
  router,
  store,
  async beforeCreate() {
    this.$store.dispatch('getKategori');
  },
  render: h => h(App)
}).$mount('#app')
