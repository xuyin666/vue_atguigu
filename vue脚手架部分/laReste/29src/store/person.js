import axios from 'axios'
import { nanoid } from 'nanoid'

const personOptions = {
    namespaced: true,
    actions: {
        addPersonWang(context, value){
            if(value.name.indexOf('wang') === 0){
                context.commit('addPerson', value)
            } else {
                alert("we need to add wang!!!!")
            }
        },
        addPersonServer(context) {
            axios.get('https://jsonplaceholder.typicode.com/users').then(
                response => {
                    context.commit('addPerson', {id: nanoid(), name: response.data[2].name})
                },
                error => {
                    alert(error.message)
                }
            )
        }
    },
    mutations: {
        addPerson(state, value){
            state.personList.unshift(value)
        }
    },
    state: {
        personList: [
            { id: '001', name: 'San'}
        ]
    },
    getters: {
        firstPersonName(state) {
            return state.personList[0].name
        }
    }
}

export default personOptions;