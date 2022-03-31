<template>
    <div>
        <h2>I'm Home</h2>
        <div>
            <ul class="nav nav-tab">
                <li>
                    <router-link class="list-group-item" active-class="active" to="/home/news">News</router-link>
                </li>
                <li>
                    <router-link class="list-group-item" active-class="active" to="/home/message">Message</router-link>
                </li>
            </ul>
            <!-- <keep-alive include="News"> -->
            <keep-alive :include="['News', 'Message']">
                <router-view></router-view>
            </keep-alive>
            
        </div>
    </div>
    
</template>

<script>
export default {
    name: 'Home',
    // beforeDestroy() {
    //     console.log('Home Component is about to destory');
    // },
    // mounted() {
    //     console.log('Home Component is about to mount', this);
    //     window.homeRoute =  this.$route
    //     window.homeRouter = this.$router
    // }
}
</script>

<style>

</style>