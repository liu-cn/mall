import{request} from "./request";
// import formatDate from "../common/util/formatDate";
// import  from '../common/util/formatDate'
import {format} from "../common/util/formatDate";

//获取详情页数据
export function getDetailData(iid) {
  return request({
    url:'/detail',
    params:{
      iid
    }
  })
}

//获取详情页推荐数据
export function getRecommend() {
  return request({
    url:'/recommend'
  })
}

//商品价格信息
export class Goods {
  constructor(itemInfo,columns,services,detailInfo) {
    this.title=itemInfo.title
    this.desc=itemInfo.desc
    this.newPrice=itemInfo.price
    this.oldPrice=itemInfo.oldPrice
    this.discount=itemInfo.discountDesc
    this.columns=columns
    this.services=services
    this.realPrice=itemInfo.lowNowPrice
    this.iid=itemInfo.iid
    this.img=detailInfo.detailImage[0].list[0]
    this.num=1
    this.isSelect=true
  }
}

// 商品服务信息
export class ShopInfo {
  constructor(shopInfo) {
    this.name=shopInfo.name
    this.shopLogo=shopInfo.shopLogo
    this.goods=shopInfo.cGoods
    this.sells=shopInfo.cSells
    this.score=shopInfo.score
    this.shopUrl=shopInfo.shopUrl
  }
}

//商品尺寸信息
export class GoodsSize {
  constructor(data) {
    this.infoKey=data.itemParams.info.key
    this.infoSet=data.itemParams.info.set
    this.infoAnchor=data.itemParams.info.anchor
    this.ruleKey=data.itemParams.rule.key
    this.ruleAnchor=data.itemParams.rule.anchor
    this.disclaimer=data.itemParams.disclaimer
    if (data.itemParams.rule.tables.length===1){
      this.tables=data.itemParams.rule.tables[0]
    }else {
      this.tables=data.itemParams.rule.tables[0]
      this.tables2=data.itemParams.rule.tables[1]

      let tableLength=this.tables.length
      for (let i=0;i<tableLength;i++){
        for (let n=0;n<this.tables2[0].length;n++){
          if(n!=0){
            this.tables[i].push(this.tables2[i][n])
          }
        }
      }
    }
  }
}

export class Rate{
  constructor(rate) {

    if (rate.list==undefined){
      this.isNull=true
    }else{
      this.content=rate.list[0].content
      this.name=rate.list[0].user.uname
      this.avatar=rate.list[0].user.avatar
      this.style=rate.list[0].style
      this.extraInfo=rate.list[0].extraInfo
      this.images=rate.list[0].images
      this.date= format(rate.list[0].created*1000,"yyyy-MM-dd hh:mm:ss")
    }


  }
}