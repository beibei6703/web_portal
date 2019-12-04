// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import "./assets/css/resets.css"
import 'element-ui/lib/theme-chalk/index.css';
import 'swiper/dist/css/swiper.css';
import axios from 'axios'
import utils from './util/utils.js';
import {getCookie,setCookie} from './util/getcookie.js';
import store from './store/index'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import { JSEncrypt } from 'jsencrypt'
import promise from 'es6-promise'
promise.polyfill();

Vue.use(ElementUI);
Vue.prototype.$getCode = (password)=> {
		let encrypt = new JSEncrypt()
		encrypt.setPublicKey('MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAsy4lcx1pnBazOaHBAN09pD0NeRfaff8Ncr/Y7h55RQ4m/YF8AS3Y9OyyP27y6BwNYBV4sVsCar+b3sNQiEM6fAkQ5ALww6CF1EWoEPvq/hSgbBMshXhp83lMVP9Yl0kpMm8GIzpmCrNI1FauSAcOSrJGfAlHzrZMlujhOzcM/YT3itXWWQRAjSRtD/P7vDYH0zX47/9O3ZLJ2rS2k5EwhsUKVtZQ/X0auQ48ksky4d7dAf7IVoVDPOKJrHd8lxooDSi25bW1d+bipubCwWef8vA18UIouY+kQvld0BFiIL1WrIN+RTQmzwOlxivYBhL446L7j1UbIPnOCyRZDtOUlQIDAQAB')
			let data =encrypt.encrypt(password);
			return data
		}
		
Vue.config.productionTip = false
Vue.prototype.$utils = utils
Vue.prototype.getCookie = getCookie
Vue.prototype.setCookie = setCookie

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
