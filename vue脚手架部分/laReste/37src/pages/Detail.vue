<template>
    <ul>
      <!-- <li>Message Numero: {{$route.params.id}}</li>
      <li>Message Title: {{$route.params.title}}</li> -->

        <li>Message Numero: {{id}}</li>
        <li>Message Title: {{title}}</li>
    </ul>
</template>

<script>
    export default {
        name: 'Detail',
        props: ['id', 'title'],
        // computed: {
        //     id() {
        //         return this.$route.query.id 
        //     },
        //     title() {
        //         return this.$route.query.title
        //     } 
        // },
        mounted() {
            // console.log(this.$route);
        }
    }
</script>
