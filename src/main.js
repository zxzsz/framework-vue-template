// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Framework7 from 'framework7/framework7.esm.bundle.js'
import Framework7Vue from 'framework7-vue/framework7-vue.esm.bundle.js'

import 'framework7/css/framework7.bundle.css'
import 'framework7-icons'
import './index.css'

import App from './App'

Vue.config.productionTip = false

Framework7.use(Framework7Vue)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
