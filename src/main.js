import Vue from 'vue'
import App from './App'
import VueCordova from 'vue-cordova'
import VueRouter from 'vue-router'
import { routes } from './system/routes'
import VueOnsen from 'vue-onsenui'

Vue.use(VueOnsen)
Vue.use(VueRouter)
Vue.use(VueCordova, {
  optionTestKey: 'optionTestValue'
})

export const router = new VueRouter({ routes })

if (window.location.protocol === 'file:' || window.location.port === '5000') {
  var cordovaScript = document.createElement('script')
  cordovaScript.setAttribute('type', 'text/javascript')
  cordovaScript.setAttribute('src', 'cordova.js')
  document.body.appendChild(cordovaScript)
}

new Vue({ 
  el: '#app',
  template: '<App/>',
  components: { App },
  router,
  data: function () {
    return {
      cordova: Vue.cordova
    }
  }
})
