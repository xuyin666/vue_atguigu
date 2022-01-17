<template>
    <div>
        <h2>Student Name: {{name}}</h2>
        <h2>Student Age: {{age}}</h2>
    </div>
</template>

<script>
    export default {
        name: 'Student',
        data() {
            return {
                name: 'san',
                age: 19,
            }
        },
    }
</script>

<style>
    .demo {
        background-color: orange;
    }
</style>



