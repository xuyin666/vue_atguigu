<template>
    <div>
        <h1 v-text="msg" ref="title"></h1>
        <button ref="btn" @click="showDOM">Click me to print the DOM below</button>
        <School ref="sch"/>
    </div>
    <!-- <School /> -->
</template>

<script>
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
                console.log(this.$refs.title) // real DOM Elemnt
                console.log(this.$refs.sch) // real DOM Element
                console.log(this.$refs.btn) // School Component Instance vc (vue component)
            }
        }

    }
</script>

<style>

</style>