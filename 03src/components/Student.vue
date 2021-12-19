<template>
    <div>
        <h2 @click="showName">Student Name: {{name}}</h2>
        <h2>Student Sex: {{sex}}</h2>
    </div>
</template>

<script>
    // import {hunhe, hunhe2} from '../mixin'
    export default {
        name: 'Student',
        data() {
            return {
                name: 'San',
                sex: 'M'
            }
        },
        // mixins:[hunhe, hunhe2],
        // mounted() {
        //     console.log('Hello!!!!!!!!')
        // },
    }
</script>
