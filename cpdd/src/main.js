import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueWechatTitle from 'vue-wechat-title'; 

import VueI18n from 'vue-i18n';
import VeeValidate from 'vee-validate';
import zh_CN from 'vee-validate/dist/locale/zh_CN'

Vue.use(VueAxios, axios)
Vue.use(VueWechatTitle)

Vue.use(VueI18n)
const i18n = new VueI18n({
  locale: 'zh_CN',
})
Vue.use(VeeValidate, {
  i18n,
  i18nRootKey: 'validation',
  dictionary: {
    zh_CN
  }
});

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

Vue.prototype.bus = new Vue;

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  if (localStorage.Token) {
    config.headers.Authorization = localStorage.Token;
  }
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});
// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  const {status} = error.response;
  if (status == 400) {
    alert('暗号不正确(╯‵□′)╯︵┻━┻拉出去打30打板')
    localStorage.removeItem('Token')
    router.push('/home')
  }
  if (status == 401) {
    alert('登录信息已过期，请重新登录')
    localStorage.removeItem('Token')
    router.push('/home')
  }
  if (status == 402) {
    alert('删除成功！')
    router.push('/love/all')
  }
  // 对响应错误做点什么
  return Promise.reject(error);
});