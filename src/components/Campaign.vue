<template>
  <div class="campaign-container">
    <header class="campaign-container__header">
      <span>Random Campaign Name</span>
    </header>

    <main class="main">
      <div class="campaign-container__tags">
        <el-button-group>
          <el-button>Instagram</el-button>
          <el-button>Youtube</el-button>
          <el-button>Facebook</el-button>
          <el-button>Twitter</el-button>
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
        <app-card></app-card>
      </div>
    </main>
  </div>
</template>

<script>
import Card from './Card';
import { mapGetters, mapActions } from 'vuex';

export default {
  components: {
    "app-card": Card
  },
  data() {
    return {
      activeName: "pending",
      dynamicTags: ["Whatever1", "Whatever2", "Whatever3", "Whatever4"]
    };
  },
  computed: {
    ...mapGetters(['campaigns'])
  },
  methods: {
    ...mapActions(['getCampaigns']),
    handleClose(tag) {
      this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
    }
  },
  mounted() {
    this.getCampaigns();
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

.campaign-container__tags {
  padding-top: 20px;
}

.campaign-container__tab {
  padding: 15px 0;
}

.campaign-cards {
  display: flex;
  padding: 15px 0;
}
</style>
