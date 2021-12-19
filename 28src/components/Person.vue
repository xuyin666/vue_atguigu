<template>
  <div>
      <h1>List Person</h1>
      <h3 style="color:red">The component au dessus the sum is {{sum}}</h3>
      <input type="text" placeholder="Please enter the name" v-model="name"/>
      <button @click="add">Add Person</button>
      <ul>
          <li v-for="p in personList" :key="p.id">{{p.name}}</li>
      </ul>
  </div>
</template>

<script>
// import {mapActions, mapState} from 'vuex'
import {nanoid} from 'nanoid'
export default {
    name: 'Person',
    data() {
        return {
            name: ''
        }
    },
    computed: {
        personList(){
            return this.$store.state.personList
        },
        sum() {
            return this.$store.state.sum
        }
        // ...mapState({personList: 'personList'})
        // ...mapState(['personList'])
    },
    methods: {
        add() {
            const personObj = {id: nanoid(), name: this.name}
            // console.log(personObj);
            this.$store.commit('addPerson', personObj)
            this.name = ""
        }
    }
}
</script>

<style>

</style>