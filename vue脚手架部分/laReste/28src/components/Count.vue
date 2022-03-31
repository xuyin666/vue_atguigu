<template>
    <div>
        <h1>The actual sum is: {{sum}}</h1>
        <h3>The 10x plus grand is : {{bigSum}}</h3>
        <h3>I m in {{school}}, study {{subject}}</h3>
        <h3 style="color:red">The total number of person: {{personList.length}}</h3>
        <select v-model.number="n">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <button @click="increment(n)">+</button>
        <button @click="decrement(n)">-</button>
        <button @click="incrementOdd(n)">Add if the Sum is impair</button>
        <button @click="incrementWait(n)">Wait a little to add</button>
    </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions} from 'vuex'

export default {
    name: 'Count',
    data() {
        return {
            n: 1, // the chiffre choisi par l'utilisateur
        }
    },
    computed: {
        ...mapState(['sum', 'school', 'subject', 'personList']),
        ...mapGetters(['bigSum'])
    },
    methods: {
        ...mapMutations({increment: 'increment', decrement: 'decrement'}),
        ...mapActions(['incrementOdd', 'incrementWait'])
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