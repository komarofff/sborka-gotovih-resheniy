export default {
  state:{
    arr:[]
  },
  getters:{
    arr(state){
      return state.arr
    }
  },
  mutations:{
    addToArr(state,data){
      state.arr.push(
      {
        num: data.num,
        var: data.var,
        val: data.val,
        ostatok: data.ostatok
      })
    }
  },
  actions:{
    pushArr({commit},payload){
      commit('addToArr',payload)
    }
  }
}
