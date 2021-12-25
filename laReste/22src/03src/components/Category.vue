<template>
    <div class="category">
        <h3>{{title}} category</h3>
        <slot :games="games" msg="hello">The value defaut</slot>
    </div>
</template>

<script>
export default {
    name: 'Category',
    props: ['listData', 'title'],
    data() {
        return {
            games: ['Age Of Empire', 'CS', 'CF', 'Super Mario'],
        }
    }
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