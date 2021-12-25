<template>
    <div>
        <h1>The actual sum is: {{sum}}</h1>
        <h3>The 10x plus grand is : {{bigSum}}</h3>
        <h3>I m in {{school}}, study {{subject}}</h3>
        <select v-model.number="n">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <button @click="increment">+</button>
        <button @click="decrement">-</button>
        <button @click="incrementOdd">Add if the Sum is impair</button>
        <button @click="incrementWait">Wait a little to add</button>
    </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'


export default {
    name: 'Count',
    data() {
        return {
            n: 1, // the chiffre choisi par l'utilisateur
        }
    },
    computed: {
        // sum() {
        //     return this.$store.state.sum;
        // },
        // school() {
        //     return this.$store.state.school;
        // },
        // subject() {
        //     return this.$store.state.subject;
        // },
        //use mapState t calculate compute property, get data from state (object) (object)
        // ...mapState({he: 'sum', xuexiao: 'school', xueke: 'subject'}),

        //use mapState t calculate compute property, get data from state (object) (array)
        ...mapState(['sum', 'school', 'subject']),

        // **********************************
        // bigSum() {
        //     return this.$store.getters.bigSum;
        // },  

        // ...mapGetters({bigSum: 'bigSum'})
        ...mapGetters(['bigSum'])
    },
    methods: {
        increment(){
            this.$store.commit('increment', this.n)
        },
        decrement(){
            this.$store.commit('decrement', this.n)
        },
        incrementOdd(){
            // if(this.$store.state.sum % 2) {
            //     this.$store.dispatch('increment', this.n)
            // }
            this.$store.dispatch('incrementOdd', this.n)
        },
        incrementWait(){
            // setTimeout(() => {
            //     this.$store.dispatch('increment', this.n)
            // }, 500)
            this.$store.dispatch('incrementWait', this.n)
        }
    },
    mounted(){
        // const x = mapState({he: 'sum', xuexiao: 'school', xueke: 'subject'})
        // console.log(x);
    },

}
</script>

<style scoped>
button {
    margin-left: 5px;
}


</style>