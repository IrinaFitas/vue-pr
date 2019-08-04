<template>
  <div class="campaign-container">
    <header class="campaign-container__header">
      <span>{{ campaign.title }}</span>
    </header>

    <main class="main">
      <div class="campaign-container__tags">
        <el-button-group>
          <el-button :class="{ 'is-active': socialFilter === 'All' }" @click="setSocialFilter('All')">All</el-button>
          <el-button :class="{ 'is-active': socialFilter === 'Instagram' }" @click="setSocialFilter('Instagram')">Instagram</el-button>
          <el-button :class="{ 'is-active': socialFilter === 'Youtube' }" @click="setSocialFilter('Youtube')">Youtube</el-button>
          <el-button :class="{ 'is-active': socialFilter === 'Facebook' }" @click="setSocialFilter('Facebook')">Facebook</el-button>
          <el-button :class="{ 'is-active': socialFilter === 'Twitter' }" @click="setSocialFilter('Twitter')">Twitter</el-button>
        </el-button-group>

        <div class="campaign-container__tab">
          <el-tabs v-model="activeName" @tab-click="setStatusFilter">
            <el-tab-pane label="Pending" name="pending"></el-tab-pane>
            <el-tab-pane label="Appoved" name="approved"></el-tab-pane>
            <el-tab-pane label="Rejected" name="rejected"></el-tab-pane>
          </el-tabs>
        </div>

        <div v-if="activeName === 'pending'" class="tags-container">
          <div class="tags-list">
            <el-tag
              :key="tag"
              v-for="tag in dynamicTags"
              closable
              :disable-transitions="false"
              @close="handleClose(tag)"
              @blur="handleInputConfirm">
              {{ tag }}
            </el-tag>
            <el-input
              class="input-new-tag"
              v-if="inputVisible"
              v-model="inputValue"
              ref="saveTagInput"
              size="mini"
              @keyup.enter.native="handleInputConfirm">
            </el-input>
            <el-button v-else class="button-new-tag" size="small" @click="showInput">+ New Tag</el-button>
          </div>
          <el-button class="button-filter-by-tags" size="small" type="primary" @click="caption = true">Filter</el-button>
        </div>

        <div class="campaign-info">
          <span class="campaign-info__total">{{ filteredArray.length > 1 ? `${filteredArray.length} items total` : `${filteredArray.length} item total` }}</span>

          <el-pagination
            v-if="filteredArray.length"
            @current-change="currentChange($event)"
            background
            small
            layout="prev, pager, next"
            :page-size="itemsPerPage"
            :current-page='currentPage'
            :total="filteredArray.length">
          </el-pagination>
        </div>
      </div>
      <div class="campaign-cards">
        <app-card v-for="item in paginatedArray" :item="item" :key="item.id" :campaignId="campaign.id"></app-card>
        <p v-if="!filteredArray.length">Упс! Нет ничего.</p>
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
      inputVisible: false,
      inputValue: '',
      activeName: "pending",
      dynamicTags: [],
      socialFilter: null,
      statusFilter: 'pending',
      caption: false,
      currentPage: 1,
      offset: 1,
      itemsPerPage: 5
    };
  },
  computed: {
    campaign() {
      return this.$store.getters.currentCampaign(+this.$route.params.id);
    },
    filteredArray() {
      if (this.socialFilter === 'All' && !this.caption) {
        return this.campaign.media
          .filter(e => e.status === this.statusFilter);
      } else if (this.socialFilter && !this.caption) {
        return this.campaign.media
          .filter(e => e.status === this.statusFilter)
          .filter(e => e.social_network === this.socialFilter);
      } else if (!this.socialFilter && this.caption) {
        this.caption = false;

        return this.campaign.media
          .filter(e => e.status === this.statusFilter)
          .filter(e => this.dynamicTags.find(item => e.caption.toLowerCase().includes(item.toLowerCase())));
      } else if (this.socialFilter && this.caption) {
        this.caption = false;

        return this.campaign.media
          .filter(e => e.status === this.statusFilter)
          .filter(e => e.social_network === this.socialFilter)
          .filter(e => this.dynamicTags.find(item => e.caption.toLowerCase().includes(item.toLowerCase())));
      } else {
        return this.campaign.media
          .filter(e => e.status === this.statusFilter);
      }
    },
    paginatedArray() {
      return this.filteredArray.slice(this.offset === 1 ? 0 : (this.offset * this.itemsPerPage) - this.itemsPerPage, this.offset * this.itemsPerPage);
    }
  },
  methods: {
    handleClose(tag) {
      this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
    },
    setSocialFilter(social) {
      this.dynamicTags = [];

      this.socialFilter = social;
      this.activeName = 'pending';
      this.setStatusFilter({ name: 'pending' });
    },
    setStatusFilter({ name }) {
      this.statusFilter = name;
    },
    showInput() {
      this.inputVisible = true;
      this.$nextTick(() => {
        this.$refs.saveTagInput.$refs.input.focus();
      });
    },
    handleInputConfirm() {
      let inputValue = this.inputValue;
      if (inputValue) {
        this.dynamicTags.push(inputValue);
      }
      this.inputVisible = false;
      this.inputValue = '';
    },
    currentChange(event) {
      this.offset = event;
    }
  }
}
</script>


<style scoped>
.tags-container {
  display: flex;
}
.tags-list {
  width: calc(100% - 150px);
}
.tags-list .el-tag {
  margin-right: 10px;
}
.input-new-tag {
  width: 90px;
}
.button-filter-by-tags {
  width: 150px;
}
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

.campaign-info {
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
}

.campaign-cards {
  display: flex;
  flex-wrap: wrap;
  padding: 15px 0;
}
</style>
