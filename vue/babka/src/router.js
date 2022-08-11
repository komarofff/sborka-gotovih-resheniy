import VueRouter from "vue-router";

import Home from "./pages/Home";
import SelectJars from './pages/SelectJars'
import SelectAmount from './pages/SelectAmount'
import Result from './pages/Result'

export default new VueRouter({
  routes:[
    {path: '/', component: Home},
    {path: '/banki', component: SelectJars,name: 'banki',props: true},
    {path: '/varenie',component: SelectAmount,name: 'varenie',props: true},
    {path: '/result',component: Result,name: 'result',props: true}
  ],
  mode: 'history',
  
})
