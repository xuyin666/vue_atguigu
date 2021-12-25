<template>
    <div class="container">
        <Category title="foods">
            <img slot="center" src="https://fr.web.img6.acsta.net/newsv7/19/04/11/15/32/4094202.jpg" alt="">
            <a slot="footer" href="http://www.atguigu.com">More infos</a>
        </Category>

        <Category title="games"> 
            <ul slot="center">
                <li v-for="(g,index) in games" :key="index">{{g}}</li>
            </ul>
            <div class="foot" slot="footer">
                <a href="http://www.atguigu.com">Standalone</a>
                <a href="http://www.atguigu.com">Internet</a>
            </div>
        </Category>

        <Category title="films"> 
            <video slot="center" controls src="https://www.youtube.com/watch?v=1_X3Gb86ZlE"></video>
            <template v-slot:footer>
                <div class="foot" >
                    <a href="http://www.atguigu.com">Classique</a>
                    <a href="http://www.atguigu.com">Hot</a>
                    <a href="http://www.atguigu.com">Conseillé</a>
                </div>
                <h4>Bievenue</h4>
            </template>
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
    .container, .foot{
        display: flex;
        justify-content: space-around;
    }
    h3 {
        text-align: center;
        background-color: orange;
    }
    video {
        width: 100%;
    }
    h4 {
        text-align: center;
    }
</style>