<template>
    <h2>I'm About</h2>
</template>

<script>
export default {
    name: 'About',
    // beforeDestroy() {
    //     console.log('About Component is about to destory');
    // },
    // mounted() {
    //     console.log('About Component is about to mount', this);
    //     window.aboutRoute =  this.$route
    //     window.aboutRouter = this.$router
    // }
    mounted() {
        // console.log(this.$route);
    },
    beforeRouteEnter (to, from, next) {
        console.log('App---beforeRouteEnter');
        // next()
        if (to.meta.isAuth) {
            if(localStorage.getItem('school') === 'atguigu') {
                next();
            } else {
                alert('School name is not correct, no right')
            }
        } else {
            next()
        }

    },
    beforeRouteLeave (to, from, next) {
        console.log('App---beforeRouteLeave');
        next()
    }
}
</script>

<style>

</style>