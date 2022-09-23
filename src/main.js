import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// import VueSocketIO from "vue-socket.io";

// Vue.use(new VueSocketIO({
//   debug:true,
//   connection:'http://43.138.149.42:5000/sex',
//   transports: ['websocket']
// }));

Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
