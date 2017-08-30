// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import cfg from './properties'
import eventBus from './EventBus'
// 加载配置文件信息
Vue.prototype.$cfg = cfg
// 单独创建事件总线功能
Vue.prototype.$eventBus = eventBus
// 这个方法是一个对象拷贝功能
Vue.prototype.$tools = {
  deepCopy: function (source) {
    let result = {}
    for (var key in source) {
      if (source[key] instanceof Array) {
        result[key] = []
        source[key].forEach((item, index) => {
          result[key][index] = this.deepCopy(item)
        })
      } else {
        result[key] = typeof source[key] === 'object' ? this.deepCopy(source[key]) : source[key]
      }
    }
    return result
  }
}

import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
import 'muse-ui/dist/theme-teal.min.css'
Vue.use(MuseUI)

import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
