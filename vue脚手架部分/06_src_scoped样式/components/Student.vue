<template>
    <div class="demo">
        <h2 class="title">Student Name: {{name}}</h2>
        <h2 class="atguigu">Student Sex: {{sex}}</h2>
    </div>
</template>

<script>
    export default {
        name: 'Student',
        data() {
            return {
                name: 'San',
                sex: 'M'
            }
        },
    }
</script>

<style lang="less" scoped>
    .demo{
        background-color: pink;
        .atguigu{
            font-size: 40px;
        }
    }
</style>