<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <ComlinkExample />
</template>

<script>
import ComlinkExample from '@/components/ComlinkExample.vue'

export default {
  name: 'App',
  components: {
    ComlinkExample
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
