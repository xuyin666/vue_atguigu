<template>
    <div class="school">
        <h2>School Name: {{name}}</h2>
        <h2>School Address: {{address}}</h2>
        <button @click="sendSchoolName">Give the school name to app</button>
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
        props: ["getSchoolName"],
        methods: {
            sendSchoolName() {
                this.getSchoolName(this.name);
            }
        }
    }
</script>

<style scoped>
    .school{
        background-color: skyblue;
        padding: 5px;
    }
</style>
