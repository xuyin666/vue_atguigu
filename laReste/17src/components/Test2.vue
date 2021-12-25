<template>
  <div>
      <button @click="isShow = !isShow">Show / Hide</button>
      <transition-group name="hello" appear>
          <h1 v-show="!isShow" key="1">Hello !</h1>
          <h1 v-show="isShow" key="2">Yinn !</h1>
      </transition-group>
  </div>
</template>

<script>
    export default {
        name: 'Test',
        data() {
            return {
                isShow: true
            }
        }
    }
</script>

<style scoped>
    h1 {
        background-color: orange;
    }

    /* the depart of enter */
    .hello-enter, .hello-leave-to{
        transform: translateX(-100%);
    }

    .hello-enter-active, .hello-leave-active {
        transition: 0.5s linear;
    }

    /* the point d'arrive of enter */
    .hello-enter-to, .hello-leave{
        transform: translateX(0);
    }



</style>