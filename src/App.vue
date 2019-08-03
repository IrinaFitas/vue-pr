<template>
  <div id="app">
    <app-header></app-header>
    <app-campaign></app-campaign>
  </div>
</template>

<script>
import Header from "./components/Header";
import Campaign from "./components/Campaign";

export default {
  name: 'app',
  components: {
    "app-header": Header,
    "app-campaign": Campaign
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 15px;
}
</style>
