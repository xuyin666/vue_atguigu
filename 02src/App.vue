<template>
    <div>
        <Student name="li si" sex="F" :age="18"/>
        <!-- <Student name="wang wu" sex="M" age="20"/> -->
    </div>
</template>

<script>
    import Student from './components/Student.vue'
    
    export default {
        name: 'App',
        components: {
            Student
        },

    }
</script>

<style>

</style>