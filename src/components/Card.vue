<template>
  <div class="container-card">
    <el-card :body-style="{ padding: '0px' }">
      <div slot="header">
        <div class="card-header">
          <div class="author-image" :style="{ backgroundImage: `url(${item.author_pic})` }"></div>
          <div class="author-info">
            <p class="author-adress">{{ item.author_username }}</p>
            <a :href="item.link" target="_blank" class="author-social">{{ item.social_network }}</a>
          </div>
        </div>
      </div>
      <div class="card-img" :style="{ backgroundImage: `url(${item.pic})` }">
        <p class="card-caption">{{ item.caption }}</p>
      </div>
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
        <el-button v-if="item.status !== 'rejected'" type="text" @click="setStatus('rejected')">Reject</el-button>
        <el-button v-if="item.status !== 'approved'" type="text" @click="setStatus('approved')">Approve</el-button>
      </div>
    </el-card>
  </div>
</template>
<script>
import { mapActions } from 'vuex';

export default {
  props: {
    campaignId: {
      required: true,
      type: Number
    },
    item: {
      required: true,
      type: Object
    }
  },
  methods: {
    ...mapActions(['changeStatus']),
    setStatus(status) {
      this.changeStatus({
        cardId: this.item.id,
        campaignId: this.campaignId,
        status
      });
    }
  },
  mounted() {
    // console.log(this.item);
  }
}
</script>

<style scoped>
.container-card {
  width: calc(25% - 10px);
  margin: 5px;
}

@media (max-width: 1400px) {
  .container-card {
    width: calc(33.33333333% - 10px);
  }
}
@media (max-width: 1000px) {
  .container-card {
    width: calc(50% - 10px);
  }
}
@media (max-width: 560px) {
  .container-card {
    width: 100%;
    min-width: 300px;
    margin-left: auto;
    margin-right: auto;
  }
}

.card-img {
  position: relative;
  margin: 0;
  width: 100%;
  height: 400px;
  background-size: cover;
  background-position: top center;
}
.card-caption {
  color: white;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: 0;
  padding: 15px 11px 15px 15px;
  z-index: 10;
  opacity: 0;
  transition: opacity 0.25s;
  background-color: rgba(0, 0, 0, 0.75);
  overflow-y: auto;

}
.card-caption::-webkit-scrollbar {
  width: 4px;
  height: 4px;
}
.card-caption::-webkit-scrollbar-track {
  background-color: transparent;
}
.card-caption::-webkit-scrollbar-thumb {
  width: 4px;
  height: 4px;
  border-radius: 3px;
  background-color: rgba(255, 255, 255, 0.5);
}
.card-img:hover .card-caption {
  opacity: 1;
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

