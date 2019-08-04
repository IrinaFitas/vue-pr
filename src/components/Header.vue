<template>
  <div class="header-container">
    <span @click="$router.push('/')">Dashboard</span>
  </div>
</template>

<style scoped>
.header-container {
  height: 60px;
  padding: 20px;
  box-sizing: border-box;
  box-shadow: 0 0 3px grey;
  font-weight: bold;
  font-size: 24px;
}
.header-container span {
  cursor: pointer;
}
</style>

