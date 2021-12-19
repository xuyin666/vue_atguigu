<template>
    <div class="container">
        <Category title="foods">
            <img src="https://fr.web.img6.acsta.net/newsv7/19/04/11/15/32/4094202.jpg" alt="">
        </Category>

        <Category title="games"> 
            <ul>
                <li v-for="(g,index) in games" :key="index">{{g}}</li>
            </ul>
        </Category>

        <Category title="films"> 
            <video controls src="https://www.youtube.com/watch?v=1_X3Gb86ZlE"></video>
        </Category>
    </div>
</template>

<script>
    import Category from './components/Category.vue';
    export default {
        name: 'App',
        components: {Category},
        data() {
            return {
                foods: ['crevette', 'steak', 'barbecue', 'fondu'],
                games: ['Age Of Empire', 'CS', 'CF', 'Super Mario'],
                films: ['God od Father', 'Atguigu', 'Credits', 'Cool']
            }
        }
    }
</script>

<style>
    .container {
        display: flex;
        justify-content: space-around;
    }
    h3 {
        text-align: center;
        background-color: orange;
    }
</style>