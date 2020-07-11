import {request} from './request'
//home组件面向home.js请求数据，这里包含了所有home组件需要的请求，

export function getHomeMultidata(){
  return request({
    url:'/home/multidata'
  })
}

export function getHomeGoods (type,page) {
  return request({
    url:'/home/data',
    params:{
      type,
      page
    }
  })
}

