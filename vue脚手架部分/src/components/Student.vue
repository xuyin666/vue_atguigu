<template>
    <div class="student">
        <h2>Student Name: {{name}}</h2>
        <h2>Student Sex: {{sex}}</h2>
        <button @click="sendStudentName">Pass the name to the school</button>
    </div>
</template>

<script>
    import pubsub from 'pubsub-js'
    
    export default {
        name: 'Student',
        data() {
            return {
                name: 'San',
                sex: 'M',
            }
        },
        mounted() {

        },
        methods: {
            sendStudentName(){
                // this.$bus.$emit('hello', this.name)
                pubsub.publish('hello', 666)
            }
        }
    }
</script>

<style scoped>
    .student{
        background-color: pink;
        margin-top: 30px;
        padding: 5px;
    }
</style>