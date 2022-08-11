export default {
  state: {
    jars:[]
  },
  getters: {
    jars(state){
      return state.jars
    }
  },
  mutations: {
    changeArrJars(state,val){
      state.jars.push(val)
    }
  },
  actions: {
    addToJarsArray({commit},payload){
      commit('changeArrJars',payload)
    }
  }
}
