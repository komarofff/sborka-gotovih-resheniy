import Vue from 'vue';
import Vuex from 'vuex';
import Jars from "../modules/Jars";
import Jam from "../modules/Jam";
import Todo from "../modules/Todo";
import Arr from "../modules/Arr";
Vue.use(Vuex);

export const store = new Vuex.Store({
  modules:{
    Jars,
    Jam,
    Todo,
    Arr
  }

});
