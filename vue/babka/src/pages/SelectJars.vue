<template>
  <div class="container mt-5">
    <h1><img src="/images/banka.gif" style="max-width: 60px; margin-right: 30px;">Specify the number of the jar and its
      volume</h1>
    <div class="row">
      <div class="col-10 mx-auto">

        <div class="  mt-3 d-flex align-items-start justify-content-between">
          <div class="input-group">
            <span class="input-group-text">Jar number (for example, M85)</span>
            <input type="text" class="form-control" :class="{'is-invalid': numberValidate}"
                   @input="$v.number1.$touch()" v-model.trim="number1">

            <div class="error" v-if="numberValidate">This number already exists</div>
          </div>
          <div class="input-group">
            <span class="input-group-text">Volume of the jar (in grams)</span>
            <input type="text" class="form-control " :class="{'is-invalid': valError }"
                   @input="$v.value1.$touch()" v-model.number="value1">
            <div class="invalid-feedback" v-if="valError===true">You can only use numbers</div>
          </div>

          <button type="submit" class="btn  btn-primary" @click="addToArray()"
                  :class="[ ($v.$invalid ||  numberValidate ) ? 'disabled' : '']" v-if="value1>0">
            Add
          </button>
        </div>
      </div>
      <div class="my-3 row col-6 mx-auto">
        <ul class="list-group" v-for="item in jars">
          <li class="list-group-item text-left" :key="item.id"><strong>Jar number</strong> - {{ item.number }} |
            <strong>Volume of the jar (in
              grams)</strong> - {{ item.value }}
          </li>
        </ul>
      </div>

    </div>
    <router-link :to="{name: 'varenie'}" tag="button" class="btn btn-success mt-5"
                 :class="{'disabled': jars.length <=0 }">Next....
    </router-link>

  </div>
</template>

<script>
import {required, numeric, minLength} from 'vuelidate/lib/validators'

export default {
  data() {
    return {
      valueValidate: false,
      numberValidate: false,
      number1: '',
      value1: '',
      empty: true,
      numError: false,
      valError: false
    }
  },
  watch: {
    number1: function () {
      // console.log(this.number1)
      var numbersArr = this.jars.map(el => el.number);
      // console.log(numbersArr.includes(this.number1))
      if (numbersArr.includes(this.number1)) {
        this.numberValidate = true
      } else {
        this.numberValidate = false
      }


    },
    value1: function () {
      console.log(this.$v.value1.numeric)
      if (!this.$v.value1.numeric) {
        this.valError = true
      } else {
        this.valError = false
      }
    }

  },
  computed: {
    jars() {
      return this.$store.getters.jars
    },
    arrayCount() {
      return this.jars.length + 1
    }
  },
  methods: {
    addToArray() {
      //this.array.push({id: this.arrayCount, number: this.number1, value: this.value1})
      this.$store.dispatch('addToJarsArray', {id: this.arrayCount, number: this.number1, value: this.value1})
      this.value1 = ''
      this.number1 = ''
      if (this.jars.length > 0) {
        this.empty = false
      }
    }

  },
  validations: {
    number1: {
      required,
      minLength: minLength(1)
    },
    value1: {
      required,
      numeric
    }
  }

}
</script>

<style scoped>
.error {
  display: block;
  width: 100%;
  margin-top: .25rem;
  font-size: .875em;
  color: #dc3545;
}
</style>
