<template>
  <div id="app">
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from './components/Header';
import { mapActions } from 'vuex';

export default {
  name: 'app',
  components: {
  'app-header': Header
  },
  methods: {
    ...mapActions(['getCampaigns'])
  },
  mounted () {
    this.getCampaigns();
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
