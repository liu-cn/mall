import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    CartList:[]
  },
  mutations: {
    AddCatList(state,shopInfo){
      state.CartList.push(shopInfo)
      console.log(state.CartList);
    },
    // ChangeState(state,id,target,value){
    //   for (let i=0;i<state.CartList.length;i++){
    //     if (id===state.CartList[i].iid){
    //       state.CartList[i].target=value
    //     }else{
    //       alert("err in store/index.js line 20 maybe param is err ")
    //     }
    //   }
    changeSelect(state,iid){
      console.log(state)
      for (let i=0;i<state.CartList.length;i++){
        if (iid===state.CartList[i].iid){
          state.CartList[i].isSelect=!state.CartList[i].isSelect
        }else{
          alert("err in store/index.js line 20 maybe param is err ")
        }
      }
    }
    },

  getters:{
    getCartList(state){
      return state.CartList
    }
  },
  actions: {
  },
  modules: {
  }
})
