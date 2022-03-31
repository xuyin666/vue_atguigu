<template>
    <div class="col-xs-offset-2 col-xs-8">
        <div class="page-header">
            <h2>Vue Router Demo</h2>
            <button @click="back">Reculer</button>
            <button @click="forward">Avancer</button>
            <button @click="test">Test go</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Banner',
    methods: {
        back() {
            this.$router.back()
        },
        forward() {
            this.$router.forward()
        },
        test() {
            this.$router.go(3)
        }
    }
}
</script>