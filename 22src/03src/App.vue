<template>
    <div class="container">
        <Category title="games"> 
            <template slot-scope="{games}">
                <ul>
                    <li v-for="(g,index) in games" :key="index">{{g}}</li>
                </ul>  
            </template>
        </Category>
        
        <Category title="games">
            <template slot-scope="atguigu">
                <ol>
                    <li style="color:red" v-for="(g,index) in atguigu.games" :key="index">{{g}}</li>
                </ol>      
                <h4>{{atguigu.msg}}</h4>
            </template>
        </Category>

        <Category title="games">
            <template slot-scope="atguigu">
                <h4 v-for="(g,index) in atguigu.games" :key="index">{{g}}</h4>
            </template>
        </Category>
    </div>
</template>

<script>
    import Category from './components/Category.vue';
    export default {
        name: 'App',
        components: {Category},
        
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