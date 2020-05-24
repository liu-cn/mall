import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    CartList:[],
  },
  mutations: {
    AddCatList(state,shopInfo){
      state.CartList.push(shopInfo)
      console.log(state.CartList);
    },
    changeSelect(state,iid){
      console.log(state)
      console.log("iid=",iid)
      for (let i=0;i<state.CartList.length;i++){
        if (iid===state.CartList[i].iid){
          state.CartList[i].isSelect=!state.CartList[i].isSelect
        }
      }
    },
    changeNum(state,idAndTarget){

        for (let i=0;i<state.CartList.length;i++){
          if (idAndTarget[0]===state.CartList[i].iid){
            if (idAndTarget[1]==="add"){
              state.CartList[i].num++
            }else if(idAndTarget[1]==="sub"){
              if (state.CartList[i].num>1){
                state.CartList[i].num--
              }else {
                alert("数量不可以再减少了！")
              }
            }else {
              console.log("err in store/index.js line 37 maybe target is wrong!");
            }
          }
        }
    },
    allSelectClick(state){
      for (let i=0;i<state.CartList.length;i++){
        state.CartList[i].isSelect=true
      }
    }
    },

  getters:{
    getCartList(state){
      return state.CartList
    },
    getSelect: state => id=>{
        for (let i=0;i<state.CartList.length;i++){
          if (id===state.CartList[i].iid){
            return state.CartList[i].isSelect
          }
        }
    },

    getIsAllSelect(state){
      for (let i=0;i<state.CartList.length;i++){
        if (state.CartList[i].isSelect===false){
          return false
        }else {
          return true
        }
      }
    }
  },
  actions: {
  },
  modules: {
  }
})
