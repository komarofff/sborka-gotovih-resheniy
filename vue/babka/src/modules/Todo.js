import axios from "axios";

export default {
  state:{
    todo: []
  },
  getters:{
    GetTodo(state){
      return state.todo
    }
  },
  setter:{

  },
  mutations:{
    addTodo(state,data){
      state.todo.push(data)
    }
  },
  actions:{
    getData({commit},payload){
      commit('addTodo',payload)
    },
    getTODo(payload){
      axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response =>{
          payload = response.data
          commit('addTodo',payload)
        })
    }
  }
}
