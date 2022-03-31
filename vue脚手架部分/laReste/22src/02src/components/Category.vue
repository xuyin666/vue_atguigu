<template>
    <div class="category">
        <h3>{{title}} category</h3>
        <slot name="center">La valeur defaut</slot>
        <slot name="footer">La valeur defaut</slot>
    </div>
</template>

<script>
export default {
    name: 'Category',
    props: ['listData', 'title']
}
</script>

<style scoped>
    .category{
        background-color: skyblue;
        width: 200px;
        height: 300px;
    }
    img {
        width: 100%;
    }

</style>