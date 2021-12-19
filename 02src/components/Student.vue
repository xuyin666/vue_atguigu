<template>
    <div>
        <h1>{{msg}}</h1>
        <h2>Student Name: {{name}}</h2>
        <h2>Student Sex: {{sex}}</h2>
        <h2>Student Age: {{myAge}}</h2>
        <button @click="updateAge">Try to update Age</button>
    </div>
</template>

<script>
    export default {
        name: 'Student',
        data() {
            return {
                msg: "I'm a student at Guigu",
                myAge: this.age
            }
        },
        props: ['name', 'age', 'sex'],

        // props: {
        //     name: String,
        //     age: Number,
        //     sex: String,
        // }

        // props: {
        //     name:{
        //         type: String,
        //         required: true,
        //     },
        //     age:{
        //         type: Number,
        //         default: 99
        //     },
        //     sex: {
        //         type: String,
        //         required: true
        //     }
        // }
        methods:{
            updateAge(){
                this.myAge++
            }
        }
    }
</script>
