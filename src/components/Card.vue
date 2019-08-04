<template>
  <div class="container-card">
    <el-card :body-style="{ padding: '0px' }">
      <div slot="header">
        <div class="card-header">
          <div class="author-image" :style="{ backgroundImage: 'url(' + item.author_pic + ')' }"></div>
          <div class="author-info">
            <p class="author-adress">{{ item.author_username }}</p>
            <a :href="item.link" target="_blank" class="author-social">{{ item.social_network }}</a>
          </div>
        </div>
      </div>
      <div class="card-img" :style="{ backgroundImage: 'url(' + item.pic + ')' }"></div>
      <p class="card-caption">{{ item.caption }}</p>
      <div class="card-info">
        <div class="card-info__likes">
          <p class="card-info__text">Likes</p>
          <p class="card-info__number">{{ item.likes_number }}</p>
        </div>
        <div class="card-info__comments">
          <p class="card-info__text">Comments</p>
          <p class="card-info__number">{{ item.comments_number }}</p>
        </div>
      </div>
      <div class="card-footer">
        <el-button type="text">Reject</el-button>
        <el-button type="text">Approve</el-button>
      </div>
    </el-card>
  </div>
</template>
<script>
export default {
  props: {
    item: {
      required: true,
      type: Object
    }
  },
  data() {
    return {
      showCaption: false
    };
  }
}
</script>


<style scoped>
.container-card {
  width: 25%;
  min-width: 300px;
}

.card-img {
  position: relative;
  margin: 0;
  width: 100%;
  height: 400px;
  background-size: cover;
}
.card-caption {
  position: absolute;
  z-index: 10;
  width: 300px;
  top: 450px;
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

.card-info__text {
  text-transform: uppercase;
  color: grey;
  font-weight: bold;
}
.card-info__number {
  font-weight: bold;
  font-size: 30px;
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

