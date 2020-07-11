import {request} from "./request"


export function getCategoryData () {
    return request({
      url:'category',
    //   params:{
    //     type,
    //     page
    //   }
    })
  }

export class category{
    constructor(res){
      this.categorylist=res.data.data.category.list
    }
}