<template>
    <div>
        <h2>School Name: {{name | mySlice}}</h2>
        <h2>School Address: {{address}}</h2>
        <input type="text" v-fbind:value="name"/>
        <button @click="test">Click me test</button>
    </div>
</template>

<script>
    export default {
        name: 'School',
        data() {
            return {
                name: 'atGuigu',
                address: 'Pekin',
            }
        },
        methods: {
            test(){
                this.hello()
            }
        }
    }
</script>
