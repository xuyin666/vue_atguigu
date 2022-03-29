<template>
    <div class="student">
        <h2>Student Name: {{name}}</h2>
        <h2>Student Sex: {{sex}}</h2>
        <h2>The actual number {{number}}</h2>
        <button @click="add">Click me number++</button>
        <button @click="sendStudentName">Give the student name to app</button>
        <button @click="unbind">unbind atguigu event</button>
        <button @click="death">销毁当前Student组件的实例vc</button>
    </div>
</template>

<script>
    export default {
        name: 'Student',
        data() {
            return {
                name: 'San',
                sex: 'M',
                number: 0
            }
        },
        methods: {
            add(){
                console.log("add callback is used");
                this.number++;
            },
            sendStudentName(){
                // 触发Student组件实例身上的atguigu事件
                this.$emit('atguigu', this.name, 666, 888, 999)
                // this.$emit('demo')
                // this.$emit('click')
            },
            unbind() {
                this.$off('atguigu') //解绑一个自定义事件
                // this.$off(['atguigu', 'demo']) //解绑多个自定义事件
                // this.$off() //解绑所有的自定义事件
            },
            death(){
                this.$destroy() //销毁了当前Student组件的实例vc，销毁后所有Student实例的自定义事件全都不奏效了。
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