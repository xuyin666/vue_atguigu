<template>
  <ul>
      <li>Message Numero: {{$route.query.id}}</li>
      <li>Message Title: {{$route.query.title}}</li>
  </ul>
</template>

<script>
    export default {
        name: 'Detail',
        mounted() {
            console.log(this.$route);
        }
    }
</script>
