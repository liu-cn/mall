import axios from 'axios'
//网络请求模块

// 可以创建多个实例导出，根据传入不同的config来请求不同的数据
export function request(config) {

  //创建一个axios实例
  const instance =axios.create({
    // 请求的baseURL，
    baseURL:'http://152.136.185.210:8000/api/n3/',
    //超时时间
    timeout:5000
  })

  //返回的是一个Promise对象
  return instance(config)
}


