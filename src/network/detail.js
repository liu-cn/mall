import{request} from "./request";

//获取详情页数据
export function getDetailData(iid) {
  return request({
    url:'/detail',
    params:{
      iid
    }
  })
}

//商品价格信息
export class Goods {
  constructor(itemInfo,columns,services) {
    this.title=itemInfo.title
    this.desc=itemInfo.desc
    this.newPrice=itemInfo.price
    this.oldPrice=itemInfo.oldPrice
    this.discount=itemInfo.discountDesc
    this.columns=columns
    this.services=services
    this.realPrice=itemInfo.lowNowPrice
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