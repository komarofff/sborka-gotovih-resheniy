<template>
  <div>
    <div class="container mt-5" >
      <!--    <h1> Jars {{ jars}}</h1>-->
      <ul class="list-group list-group-numbered">
        <li class="list-group-item" v-for="jar in jars">In a jar №{{ jar.number }} value - {{ jar.value }} gramm
        </li>
      </ul>
      <!--    <h1>Jam {{ jam }}</h1>-->
      <ul class="list-group list-group-numbered">
        <li class="list-group-item" v-for="j in jam">In a pot  with <strong>{{ j.id }}</strong> jam amount is  - {{ j.amount }} gramm</li>
      </ul>
      <hr>

      <button class="btn btn-success" @click="putJamToJars" v-if="jam.length > 0">Pour into jars </button>
    </div>
    <div class="container mt-5">
<!--        {{ arr }} {{jam.length}}-->
      <div v-if="arr.length>0" class="mt-3">
        <h1>Рoured the jam into jars:</h1>
        <ul class="list-group ">
          <li class="list-group-item" v-for="v in arr" v-if="v.val > 0">In a jar  <strong>№{{ v.num }}</strong> with value  -{{ v.val }} gramm
            is jam -
            <strong>{{ v.var }}</strong> .
            <span v-if="v.ostatok < 0 ">Free space in jar  {{ -v.ostatok }} gramm</span>
            <!--            <span v-if="v.ostatok > 0 ">Осталось неразлитым  {{ v.ostatok }} грамм варенья</span>-->
          </li>
        </ul>
      </div>
      <div v-if="jars2.length>0">
        <h1>We have empty jars:</h1>
        <ul class="list-group ">
          <li class="list-group-item" v-for="b in jars2">Jar <strong> №{{ b.number }}</strong> - value
            <strong>{{ b.value }}</strong> gramm
          </li>
        </ul>
      </div>

      <div v-if="jams2.length>0" class="mt-3">
        <h1>We have jam :</h1>
        <ul class="list-group ">
          <li class="list-group-item" v-for="jm in jams2">In a pan with  <strong>{{ jm.id }}</strong> we have -
            <strong>{{ jm.amount }}</strong> gramm
          </li>
        </ul>
        <router-link to="/banki" tag="bottom" class="btn btn-primary">Add jars</router-link>
      </div>
      <h1 v-if="jam.length===0"> All the jam is poured into jars. You can invite guests</h1>


      <hr class="my-3">
      <div v-if="jam.length===0 ">
        <h1>Bonus</h1>
        <button class="btn btn-danger" @click="getDataFromServer()">Press me</button>
        <div>
          <h1>Use Axios . Getting users list who will eat BabKa`s jam :)</h1>
          <!--          {{arr2}}-->
          <ul class="list-group ">
            <li class="list-group-item " v-for="item in arr2">
              {{ item.id }} ) | Name - {{ item.name }} | Email - {{ item.email }}
              | Address : {{ item.address.city }} , {{ item.address.street }} street , {{ item.address.suite }}
            </li>
          </ul>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      ostat: 0,
      jars2: [],
      jams2: [],
      arr2: []
    }
  },
  computed: {
    jars() {
      return this.$store.getters.jars.sort((prev, next) => prev.value - next.value)

    },
    jam() {
      return this.$store.getters.jam.sort((prev, next) => prev.amount - next.amount)

    },
    todo() {
      return this.$store.getters.GetTodo
    }
  ,
    arr(){
      return this.$store.getters.arr
    }
  },
  methods: {
    // если остаток с минусом - это пустое место в банке
    // если с плюсом , то столько варенья еще осталось неразлитым
    putJamToJars() {
      this.jars2 = this.jars
      this.jars2.sort((prev, next) => prev.value - next.value)
      this.jams2 = this.jam
      this.jams2.sort((prev, next) => prev.amount - next.amount)

//
      for (let z = 0; z < this.jams2.length; z++) {
        for (let i = 0; i < this.jars2.length; i++) {
          if (this.jams2[z].amount === this.jars2[i].value) {
            this.ostat = this.jams2[z].amount - this.jars2[i].value
            this.jams2[z].amount -= this.jars2[i].value
            this.$store.dispatch('pushArr',
              {num: this.jars2[i].number,
                var: this.jams2[z].id,
                val: this.jars2[i].value,
                ostatok: this.ostat})
            // this.arr.push({
            //   num: this.jars2[i].number,
            //   var: this.jams2[z].id,
            //   val: this.jars2[i].value,
            //   ostatok: this.ostat
            // })
            this.jars2[i].value = 0
            this.jams2[z].amount = 0
            this.ostat = 0
            break
          }
          if (this.jars2[i].value > this.jams2[z].amount) {
            this.ostat = this.jams2[z].amount - this.jars2[i].value
            this.jams2[z].amount -= this.jars2[i].value
            this.$store.dispatch('pushArr',
              {num: this.jars2[i].number,
                var: this.jams2[z].id,
                val: this.jars2[i].value,
                ostatok: this.ostat})
            this.jars2[i].value = 0
            this.jams2[z].amount = 0
            this.ostat = 0
            break
          }
          if (this.jams2[z].amount > this.jars2[i].value) {
            this.ostat = this.jams2[z].amount - this.jars2[i].value
            this.jams2[z].amount -= this.jars2[i].value
            this.$store.dispatch('pushArr',
              {num: this.jars2[i].number,
                var: this.jams2[z].id,
                val: this.jars2[i].value,
                ostatok: this.ostat})
            this.jars2[i].value = 0
            this.ostat = 0
          }
        }
      }
      for (let x = this.jars2.length; x--;) {
        if (this.jars2[x].value === 0) {
          this.jars2.splice(x, 1)
        }
      }
      for (let x = this.jams2.length; x--;) {
        if (this.jams2[x].amount === 0) {
          this.jams2.splice(x, 1)
        }
      }


      }
    ,
    getDataFromServer() {
      axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
          this.arr2 = response.data
        })
      this.$store.dispatch('getData', this.arr2)
    }
  },

  // beforeMount() {
  //   axios.get('https://jsonplaceholder.typicode.com/users')
  //     .then(response =>{
  //       this.$store.dispatch('getData',response.data)
  //     })
  //
  // }


}
</script>

<style scoped>

</style>
