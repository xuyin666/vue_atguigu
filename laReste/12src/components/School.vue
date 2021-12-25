<template>
    <div class="school">
        <h2>School Name: {{name}}</h2>
        <h2>School Address: {{address}}</h2>
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
        mounted() {
            // console.log('School', this);
            this.$bus.$on('hello', (data) => {
                console.log("I'm School Component, receive data ", data);
            })
        },
        beforeDestroy() {
            this.$bus.$off('hello')
        }
    }
</script>

<style scoped>
    .school{
        background-color: skyblue;
        padding: 5px;
    }
</style>
