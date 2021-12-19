<template>
    <div>
        <h2 @click="showName">School Name: {{name}}</h2>
        <h2>School Address: {{address}}</h2>
    </div>
</template>

<script>
    // import {hunhe, hunhe2} from '../mixin'
    export default {
        name: 'School',
        data() {
            return {
                name: 'atGuigu',
                address: 'Pekin',
                x: 666
            }
        },
        // mixins:[hunhe, hunhe2],
        // mounted() {
        //     console.log('Hello!!!!!!!!')
        // },
    }
</script>
