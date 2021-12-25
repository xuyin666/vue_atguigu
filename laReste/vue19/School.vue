<template>
    <div class="demo">
        <h2>School Name: {{name}}</h2>
        <h2>School Addresse: {{addresse}}</h2>
        <button @click="showName">Click me in School</button>
    </div>
</template>

<script>
    // export const school = Vue.extend({
    // const school = Vue.extend({
    //     data() {
    //         return {
    //             schoolName: 'atGuigu',
    //             addresse: 'Pekin',
    //         }
    //     },
    //     methods: {
    //         showName() {
    //             alert(this.schoolName)
    //         }
    //     },
    // })
    // export {school}
    // export default school
    export default {
        name: 'School',
        data() {
            return {
                name: 'atGuigu',
                addresse: 'Pekin',
            }
        },
        methods: {
            showName() {
                alert(this.name)
            }
        },
    }
</script>

<style>
    .demo {
        background-color: orange;
    }
</style>



