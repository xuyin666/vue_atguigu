<template>
    <ul>
        <li :style="{opacity}">Good to study Vue</li>
        <li>news001<input type="text"></li>
        <li>news002<input type="text"></li>
        <li>news003<input type="text"></li>
    </ul>
</template>

<script>
export default {
    name: 'News',
    data(){
        return {
            opacity: 1
        }
    },
    // beforeDestroy() {
    //     console.log("News will be destoryed");
    //     clearInterval(this.timer)
    // },
    // mounted() {
    //     this.timer = setInterval(() => {
    //         console.log("@");
    //         this.opacity -= 0.01
    //         if(this.opacity <= 0) this.opacity = 1
    //     }, 16)
    // }
    activated() {
        console.log("News component activated");
        this.timer = setInterval(() => {
            console.log("@");
            this.opacity -= 0.01
            if(this.opacity <= 0) this.opacity = 1
        }, 16)
    },
    deactivated() {
        console.log("News component deactivated");
        clearInterval(this.timer)
    }
}
</script>
