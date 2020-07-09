import axios from 'axios'
import AsyncStorage from '@react-native-community/async-storage'
import {WToast} from 'react-native-smart-tip'
// 接口地址
const baseUrl = 'http://community-server.baise.whdev.vpclub.cn/'
// const baseUrl = 'https://community-site.baise.vpclub.cn/cross/'


// 使用create方法创建axios实例
const request = axios.create({
  baseURL: baseUrl,
  timeout: 3000,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8'
  }
})
// 添加request请求拦截
request.interceptors.request.use(async (config) => {
  WToast.show({data: 'hello world',position: WToast.position.CENTER})
  try {
    config.headers['token'] = await AsyncStorage.getItem('token')
  } catch{
    console.log('未获取到token')
  }
  console.log('请求信息：', JSON.stringify(config))
  return config
})
// 添加响应response拦截器
request.interceptors.response.use(response => {
  const res = response.data
  console.log('响应信息：', res)
  if (res.code !== '0') {
    return Promise.reject('Error', res)
  }
  return res
}, error => {
  console.log('接口报错返回：', error)
})


export default request