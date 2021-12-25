<template>
    <div>
        <School></School>
        <Student></Student>
    </div>
</template>

<script>
    import School from './School'
    import Student from './Student' 
    
    export default {
        name: 'app',
        components: {
            School,
            Student
        }
    }
</script>
