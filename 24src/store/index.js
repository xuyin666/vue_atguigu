// this file is used to create plugin vuex store
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// prepare actions used to respond the actions of component
const actions = {
    increment(context, value){
        console.log("add is used")
        context.commit('increment', value)
    },
    decrement(context, value){
        context.commit('decrement', value)
    },
    incrementOdd(context, value){
        if(context.state.sum % 2) {
            context.commit('increment', value)
        }
        // console.log('actions increment is called ', context);
        // console.log("handle something ---incrementOdd");
        // context.dispatch('demo1', value)
    },
    // demo1(context, value) {
    //     console.log('handle someting ---demo1');
    //     context.dispatch('demo2', value)
    // },
    // demo2(context, value) {
    //     console.log('handle someting ---demo2');
    //     if(context.state.sum % 2) {
    //         context.commit('increment', value)
    //     }
    // },
    incrementWait(context, value){
        setTimeout(() => {
            context.commit('increment', value)
        }, 500)
    }

}

// prepare mutation used for munipulation of state
const mutations = {
    increment(state, value){
        state.sum += value
    },
    decrement(state, value){
        state.sum -= value
    }
}

// prepare state used for to state for data
const state = {
    sum: 0 // la somme 
}

// // create store
// const store = new Vuex.Store({
//     actions, 
//     mutations, 
//     state
// })

// // export store
// export default store 

// create store
export default new Vuex.Store({
    actions, 
    mutations, 
    state
})
