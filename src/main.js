// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

Vue.prototype.sayHello = (name) => console.log(`${name} Hello world!`)
// Vue.use({
//   install(Vue){
//     Vue.prototype.sayHello = function(name){
//       console.log(`${name} Hello world!`)
//     }
//   }
// })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
