<template>
  <div class="container mt-5">
    <h1>What kind of jam we cook and the volume</h1>


    <div class="row col-12 my-4">
      <div class="form-group col-4 d-flex flex-column align-self-stretch justify-content-between align-items-center">
        <h2>Strawberry</h2>
        <img class=" img-thumbnail  rounded" src="/images/klubnika.jpg" alt="klubnika" style="height: 300px">
        <div class="my-3">
          <span class="input-group-text">The volume of jam (in grams)</span>
          <input type="text" class="form-control" v-model.number="valueKlubnika" @input="$v.valueKlubnika.$touch()"
                 :class="{'is-invalid': $v.valueKlubnika.$error}">
          <div class="invalid-feedback" v-if="$v.valueKlubnika.$error">You can only specify numbers</div>
          <button type="submit" class="btn  btn-primary mt-3" @click="addToArray('Strawberry',valueKlubnika)"
                  :class="{'disabled': $v.valueKlubnika.$error  }">
            Add
          </button>
        </div>
      </div>

      <div class="form-group col-4 d-flex flex-column align-self-stretch justify-content-between align-items-center">
        <h2>Apricot</h2>
        <img class=" img-thumbnail  rounded" src="/images/abrikos.jpg" alt="abrikos" style="height: 300px">
        <div class="my-3">
          <span class="input-group-text">The volume of jam (in grams)</span>
          <input type="text" class="form-control" v-model.number="valueAbrikos" @input="$v.valueAbrikos.$touch()"
                 :class="{'is-invalid': $v.valueAbrikos.$error}">
          <div class="invalid-feedback" v-if="$v.valueAbrikos.$error">You can only specify numbers</div>
          <button type="submit" class="btn  btn-primary mt-3" @click="addToArray('Apricot',valueAbrikos)"
                  :class="{'disabled':  $v.valueAbrikos.$error }">
           Add
          </button>
        </div>
      </div>

      <div class="form-group col-4 d-flex flex-column align-self-stretch justify-content-between align-items-center">
        <h2>Cherry</h2>
        <img class=" img-thumbnail  rounded" src="/images/vishnia.jpg" alt="vishnia" style="height: 300px">
        <div class="my-3">
          <span class="input-group-text">The volume of jam (in grams)</span>
          <input type="text" class="form-control" v-model.number="valueVishnia" @input="$v.valueVishnia.$touch()"
                 :class="{'is-invalid': $v.valueVishnia.$error}">
          <div class="invalid-feedback" v-if="$v.valueVishnia.$error">You can only specify number</div>
          <button type="submit" class="btn  btn-primary mt-3" @click="addToArray('Cherry',valueVishnia)"
                  :class="{'disabled':  $v.valueVishnia.$error  }">
           Add
          </button>
        </div>
      </div>
    </div>


    <router-link :to="{name: 'result'}" tag="button" class="btn btn-success mt-5"
                 :class="{'disabled': jam.length <= 0 }">Next....
    </router-link>
    <div>
<!--      {{ jam}}-->
     <p> {{ jars ? 'Amount of jars -' + jars.length : ''}}</p>
      <div class="col-6 mx-auto" v-if="jam.length>0"> Amount of jams :
        <ol class="list-group list-group-numbered">
          <template v-for="varen in jam">
          <li class="list-group-item d-flex justify-content-between align-items-start" v-if="varen.fill">
            <div class="ms-2 me-auto">
              <div class="fw-bold">{{ varen.id }}</div>
            </div>
            <span class="badge bg-primary rounded-pill">{{ varen.amount }} gramm</span>
          </li>
          </template>
        </ol>
<!--        <ul>-->
<!--          <li v-for="varen in varArr">{{ varen.id }} &#45;&#45; {{ varen.amount }}</li>-->
<!--        </ul>-->
      </div>
    </div>
  </div>
</template>

<script>
import {required, numeric} from 'vuelidate/lib/validators'

export default {
  data() {
    return {
      valueKlubnika: null,
      valueVishnia: null,
      valueAbrikos: null,
      empty: true,
      fillVal: false
    }
  },
  props: ['date'],
  validations: {
    valueVishnia: {
      numeric
    },
    valueKlubnika: {
      numeric
    },
    valueAbrikos: {
      numeric
    }
  },
  watch: {
    valueVishnia: function () {
      if (this.valueVishnia != '' && !this.$v.$invalid) {
        this.empty = false
      }
    },
    valueKlubnika: function () {
      if (this.valueKlubnika != '' && !this.$v.$invalid) {
        this.empty = false
      }
    },
    valueAbrikos: function () {
      if (this.valueAbrikos != '' && !this.$v.$invalid) {
        this.empty = false
      }

    }

  },
  computed:{
    jam(){
      return this.$store.getters.jam
    },
    jars(){
      return this.$store.getters.jars
    }
  },
  methods: {
    addToArray(id1, value1) {
      const searchArr = this.jam.map(el => el.id);
      if (searchArr.includes(id1) && value1 !=null) {
        const index = this.jam.findIndex(p => p.id == id1)

        //this.varArr[index] = {id: id1, amount: value1, fill: true}
        //changeIndex
        if(value1===0){
          this.$store.dispatch('deleteIndex',{index: index})
        }else {
          this.fillVal = true
          this.$store.dispatch('changeIndex', {index: index, id: id1, amount: value1, fill: this.fillVal})
        }
        this.valueVishnia = null
        this.valueKlubnika = null
        this.valueAbrikos = null

      }
      if (!searchArr.includes(id1) && value1 !=null && value1>0) {
        this.$store.dispatch('addToVar',{id: id1, amount: value1, fill: true})
        // this.varArr.push({id: id1, amount: value1, fill: true})
        this.valueVishnia = null
        this.valueKlubnika = null
        this.valueAbrikos = null
        // var index = this.varArr.findIndex(p => p.id == id1)
        // console.log("index="+index)
      }
      //}
    }
  }
}
</script>

<style scoped>

</style>
