<template>
    <div>
        <h1 v-text="msg" ref="title"></h1>
        <button ref="btn" @click="showDOM">Click me to print the DOM below</button>
        <School ref="sch"/>
    </div>
    <!-- <School /> -->
</template>

<script>
    // 引入School组件
    import School from './components/School.vue'
    
    export default {
        name: 'App',
        components: {
            School
        },
        data() {
            return {
                msg: 'Good good study'
            }
        },
        methods: {
            showDOM(){
                // console.log('@')
                console.log(this.$refs.title) // 真实DOM元素
                console.log(this.$refs.sch) // 真实DOM元素
                console.log(this.$refs.btn) // School组件的实例对象（vc）
            }
        }

    }
</script>

<style>

</style>