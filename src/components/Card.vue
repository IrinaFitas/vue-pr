<template>
  <div class="container-card">
    <el-card :body-style="{ padding: '0px' }">
      <div slot="header">
        <div class="card-header">
          <div class="author-image"></div>
          <div class="author-info">
            <p class="author-adress">some@mail.ru</p>
            <a href="#" class="author-social">Instagram</a href="#">
          </div>
        </div>
      </div>
      <figure class="card-img">
        <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
      </figure>
      <div class="card-info">
        <div class="card-info__likes">
          <p>Likes</p>
          <p>123</p>
        </div>
        <div class="card-info__comments">
          <p>Comments</p>
          <p>456</p>
        </div>
      </div>
      <div class="card-footer">
        <el-button type="text">Reject</el-button>
        <el-button type="text">Approve</el-button>
      </div>
    </el-card>
  </div>
</template>

<style scoped>
.container-card {
  min-width: 25%;
}

.card-img {
  margin: 0;
}

.image {
  width: 100%;
}

.card-info,
.card-footer {
  display: flex;
  padding: 15px;
}

.card-info__likes,
.card-info__comments {
  width: 30%;
  text-transform: uppercase;
}

.card-footer {
  border-top: 1px solid grey;
}
.card-header {
  display: flex;
  align-items: center;
  height: 50px;
  box-sizing: border-box;
}
.author-image {
  display: block;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: grey;
  margin-right: 15px;
}
.author-adress,
.author-social {
  margin: 0;
}
.author-social {
  color: lightblue;
}
</style>

