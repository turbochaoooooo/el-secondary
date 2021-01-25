import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import MtEle from './modules/packages'

Vue.use(ElementUI);

Vue.use(MtEle, 
  // {
  //   components: [
  //     'MtButton',
  //     'MtTable'
  //   ]
  // }
)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
