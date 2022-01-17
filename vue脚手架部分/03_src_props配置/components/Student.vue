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
        //简单声明接收
        props: ['name', 'age', 'sex'], 

        // 接收的同时对数据进行类型限制
        // props: {
        //     name: String,
        //     age: Number,
        //     sex: String,
        // }

        // 接收的同时对数据进行类型限制+默认值的指定+必要性的限制
        // props: {
        //     name:{
        //         type: String, // name的类型是字符串
        //         required: true, // name是必要的
        //     },
        //     age:{
        //         type: Number,
        //         default: 99 // 默认值
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
