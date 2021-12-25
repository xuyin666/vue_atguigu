<template>
    <div class="student">
        <h2>Student Name: {{name}}</h2>
        <h2>Student Sex: {{sex}}</h2>
        <h2>The actual number {{number}}</h2>
        <button @click="add">Click me number ++</button>
        <button @click="sendStudentName">Give the student name to app</button>
        <button @click="unbind">unbind atguigu event</button>
        <button @click="death">Destroy the student component instance</button>
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
                this.$emit('atguigu', this.name, 666, 888, 999)
                // this.$emit('demo')
                // this.$emit('click')
            },
            unbind() {
                this.$off('atguigu') //unbind one event

                // this.$off(['atguigu', 'demo']) //unbind one event

                // this.$off() //unbind all the custom event
            },
            death(){
                this.$destroy()
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