<template >
  <div class="bg-light-yellow">
  <FootballResults  class="w-50 dib"/>
  <CurrentMatch class="w-50 dib bl" />
  </div>
</template>

<script>
import FootballResults from './components/FootballResults.vue'
import CurrentMatch from './components/CurrentMatch.vue'

export default {
  name: 'App',
  components: {
    FootballResults,
    CurrentMatch
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
