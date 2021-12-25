<template>
    <section>
        <h3>Search Github Users</h3>
        <div>
            <input type="text" placeholder="enter the name you search" v-model="keyword"/>&nbsp;
            <button @click="searchUsers">Search</button>
        </div>
    </section>
</template>

<script>
import axios from 'axios'
export default {
    name: 'Search',
    data() {
        return {
            keyword: ""
        }
    },
    methods: {
        searchUsers() {
            this.$bus.$emit('updateListData',{ isFalse: false,isLoading: true, errMsg : '', users:[]})
            this.$http.get(`https://api.github.com/search/users?q=${this.keyword}`).then(
                response => {
                    // console.log("response OK");
                    // this.$bus.$emit('getUsers', response.data.items);
                    // this.$bus.$emit('updateListData', false, false, '', response.data.items)
                    this.$bus.$emit('updateListData',{isLoading: false, errMsg : '', users: response.data.items})
                },
                error => {
                    console.log("Response fails", error.message)
                    this.$bus.$emit('updateListData', { isLoading: false, errMsg : error.message, users: []})
                }
            )
            // console.log(this);
        },
        
    }
}
</script>

<style>

</style>