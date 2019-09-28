/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-28 21:04:12
 * @LastEditTime: 2019-09-28 21:04:12
 * @LastEditors: your name
 */
import Vue from 'vue'
import App from './index'

// add this to handle exception
Vue.config.errorHandler = function (err) {
  if (console && console.error) {
    console.error(err)
  }
}

const app = new Vue(App)
app.$mount()
