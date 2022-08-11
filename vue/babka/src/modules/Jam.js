

export default {
  state: {
       jam: [],
  },
  getters: {
    jam(state){
      return state.jam
    }
  },
  mutations: {
    changeJamArr(state,val){
      state.jam.push(val)
    },
    changeJamIndex(state,val){
      let indArr= val.index
      state.jam[indArr] = {id: val.id, amount: val.amount, fill: val.fill}
    },
    delFromJam(state,val){
      let indArr2= val.index
      state.jam.splice(indArr2,1)
    }
  },
  actions: {
    addToVar({commit},payload){
      commit('changeJamArr',payload)
    },
    changeIndex({commit},payload){
      commit('changeJamIndex',payload)
    },
    deleteIndex({commit},payload){
      commit('delFromJam',payload)
    }
  }
}
