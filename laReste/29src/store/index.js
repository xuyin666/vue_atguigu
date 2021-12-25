// this file is used to create plugin vuex store
import Vue from 'vue'
import Vuex from 'vuex'
import countOptions from './count'
import personOptions from './person'

Vue.use(Vuex)


// create store
export default new Vuex.Store({
    modules: {
        countAbout: countOptions,
        personAbout: personOptions
    }
})
