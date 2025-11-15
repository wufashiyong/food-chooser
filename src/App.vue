<template>
  <div id="app">
    <EatMeat/>
  </div>
</template>

<script>
import EatMeat from './components/EatMeat.vue'

export default {
  name: 'App',
  components: {
    EatMeat
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
}
</style>
