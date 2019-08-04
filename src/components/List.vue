<template>
  <ul class="list-campaigns">
    <li v-for="item in campaigns" :key="item.id" class="list-campaigns__item">
      <router-link :to="{ path: `/campaign/${item.id}` }">{{ item.title }}</router-link>
    </li>
  </ul>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  computed: {
    ...mapGetters(['campaigns'])
  },
  methods: {
    ...mapActions(['getCampaigns'])
  },
  mounted () {
    this.getCampaigns();
  }
}
</script>


<style scoped>
.list-campaigns {
  margin: 0;
  margin-top: 20px;
  padding: 0;
  list-style: none;
}
.list-campaigns__item {
  margin-bottom: 10px;
  font-size: 20px;
  font-weight: bold;
  box-shadow: 0 0 3px #0000e6;
  cursor: pointer;
}
.list-campaigns__item:hover {
  background-color: #e6e6ff;
}
.list-campaigns__item a {
  display: block;
  padding: 15px;
  text-decoration: none;
  color: #2c3e50;
}
</style>

