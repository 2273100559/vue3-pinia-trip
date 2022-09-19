import axios from 'axios'

import {BASE_URL,TIMEOUT} from './config'

class GFRequest {
  constructor(baseURL, timeout=1000) {
    this.instance = axios.create({
      baseURL,
      timeout
    })
  }
  
  // * 创建request方法
  request(config) {
    return new Promise((resolve,reject)=>{
      this.instance.request(config)
      .then(res =>{
        resolve(res.data)
      })
      .catch(err =>{
        reject(err)
      })
    })
  }

  // * 创建get方法
  get(config) {
    return this.request({...config, method:'get'})
  }

  // * 创建post方法
  post(config) {
    return this.request({...config, method:'post'})
  }
}

export default new GFRequest(BASE_URL,TIMEOUT)