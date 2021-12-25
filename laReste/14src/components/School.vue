<template>
    <div class="school">
        <h2>School Name: {{name}}</h2>
        <h2>School Address: {{address}}</h2>
    </div>
</template>

<script>
    import pubsub from 'pubsub-js'

    export default {
        name: 'School',
        data() {
            return {
                name: 'atGuigu',
                address: 'Pekin',
            }
        },
        methods: {
            demo(msgName, data){
                console.log('hello recived data', data, this);
            }
        },
        mounted() {
            // console.log('School', this);
            // this.$bus.$on('hello', (data) => {
            //     console.log("I'm School Component, receive data ", data);
            // })
            // this.pubId = pubsub.subscribe('hello', (msgName, data) => {
            //     // console.log(this)
            //     console.log('soemone publie hello, hello callback is being executed',msgName, data);
            // })

             this.pubId = pubsub.subscribe('hello', this.demo)
        },
        beforeDestroy() {
            // this.$bus.$off('hello')
            pubsub.unsubscribe(this.pubId)
        }
    }
</script>

<style scoped>
    .school{
        background-color: skyblue;
        padding: 5px;
    }
</style>
