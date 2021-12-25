<template>
    <div>
        <button @click="getPosts">Get the post info</button>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name: 'App',
        methods: {
            getPosts() {
                axios.get('https://localhost:8080/students').then(
                    response => {
                        console.log("Request OK", response.data);
                    },
                    error => {
                        console.log('Request fails', error.message);
                    }
                )
            }
        }
    }
</script>

<style>
    
</style>