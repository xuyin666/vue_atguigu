<template>
  <div>
      <h1>List Person</h1>
      <h3 style="color:red">The component au dessus the sum is {{sum}}</h3>
      <h3>The first Name of first Person {{firstPersonName}}</h3>
      <input type="text" placeholder="Please enter the name" v-model="name"/>
      <button @click="add">Add Person</button>
      <button @click="addWang">Add wang</button>
      <button @click="addPersonServer">Add a person name aleatoire</button>
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
            return this.$store.state.personAbout.personList
        },
        sum() {
            return this.$store.state.countAbout.sum
        },
        firstPersonName(){
            return this.$store.getters['personAbout/firstPersonName']
        }
        // ...mapState({personList: 'personList'})
        // ...mapState(['personList'])
    },
    methods: {
        add() {
            const personObj = {id: nanoid(), name: this.name}
            // console.log(personObj);
            this.$store.commit('personAbout/addPerson', personObj)
            this.name = ""
        },
        addWang() {
            const personObj = {id: nanoid(), name: this.name}
            this.$store.dispatch('personAbout/addPersonWang', personObj)
            this.name = ""
        },
        addPersonServer() {
            this.$store.dispatch('personAbout/addPersonServer')
        }
    }
}
</script>

<style>

</style>