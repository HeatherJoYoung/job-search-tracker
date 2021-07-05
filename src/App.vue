<template>
  <app-header></app-header>
  <router-view/>
</template>

<script>
import AppHeader from '@/components/AppHeader'

export default {
  components: {
    AppHeader
  }
}
</script>


<style lang="scss">
body, html, #app {
   height: 100vh;
}
body {
    margin: 0;
    background-image: url("./assets/white-blue-green.jpg");
    overflow: hidden;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
