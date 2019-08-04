<template>
  <div class="campaign-container">
    <header class="campaign-container__header">
      <span @click="showAll">{{ campaign.title }}</span>
    </header>

    <main class="main">
      <div class="campaign-container__tags">
        <el-button-group>
          <el-button @click="showInstagram">Instagram</el-button>
          <el-button @click="showYoutube">Youtube</el-button>
          <el-button @click="showFacebook">Facebook</el-button>
          <el-button @click="showTwitter">Twitter</el-button>
        </el-button-group>

        <div class="campaign-container__tab">
          <el-tabs v-model="activeName">
            <el-tab-pane label="Pending" name="pending">Pending</el-tab-pane>
            <el-tab-pane label="Appoved" name="approved">Appoved</el-tab-pane>
            <el-tab-pane label="Rejected" name="rejected">Rejected</el-tab-pane>
          </el-tabs>
        </div>

        <div>
          <el-tag
            :key="tag"
            v-for="tag in dynamicTags"
            closable
            :disable-transitions="false"
            @close="handleClose(tag)">
            {{tag}}
          </el-tag>
          <el-button type="primary">Filter</el-button>
        </div>
      </div>
      <div class="campaign-cards">
        <app-card v-for="item in campaignArray" :item="item" :key="item.id" :campaignId="campaign.id"></app-card>
        <p v-if="!campaignArray.length">Упс! Нет ничего</p>
      </div>
    </main>
  </div>
</template>

<script>
import Card from './Card';

export default {
  components: {
    "app-card": Card
  },
  data() {
    return {
      activeName: "pending",
      dynamicTags: ["Whatever1", "Whatever2", "Whatever3", "Whatever4"],
      campaignArray: []
    };
  },
  computed: {
    campaign() {
      return this.$store.getters.currentCampaign(+this.$route.params.id);
    },
    campaignFacebook() {
      return this.campaign.media.filter(elem => elem.social_network === "Facebook");
    },
    campaignInstargam() {
      return this.campaign.media.filter(elem => elem.social_network === "Instagram");
    },
    campaignTwitter() {
      return this.campaign.media.filter(elem => elem.social_network === "Twitter");
    },
    campaignYoutube() {
      return this.campaign.media.filter(elem => elem.social_network === "Youtube");
    }
  },
  mounted() {
    this.campaignArray = this.campaign.media;
  },
  methods: {
    handleClose(tag) {
      this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
    },
    showFacebook() {
      this.campaignArray = this.campaignFacebook;
    },
    showInstagram() {
      this.campaignArray = this.campaignInstargam;
    },
    showTwitter() {
      this.campaignArray = this.campaignTwitter;
    },
    showYoutube() {
      this.campaignArray = this.campaignYoutube;
    },
    showAll() {
      this.campaignArray = this.campaign.media;
    }
  }
}
</script>


<style scoped>
.campaign-container {
  margin-top: 20px;
}
.campaign-container__header {
  height: 60px;
  padding: 20px;
  box-sizing: border-box;
  box-shadow: 1px 1px 3px grey;
  font-weight: bold;
}
.campaign-container__header span {
  cursor: pointer;
}

.campaign-container__tags {
  padding-top: 20px;
}

.campaign-container__tab {
  padding: 15px 0;
}

.campaign-cards {
  display: flex;
  flex-wrap: wrap;
  padding: 15px 0;
}
</style>
