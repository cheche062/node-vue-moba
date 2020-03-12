<template>
  <div class="home">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(item, index) in images" :key="index">
        <img class="w-100" src="../assets/images/654e2025b51f89efd0646f328fc86986.jpeg" />
      </swiper-slide>
      <div class="swiper-pagination pagination-home text-right px-3 pb-1" slot="pagination"></div>
    </swiper>

    <div class="nav-icons pt-3 text-dark text-center bg-white mt-3">
      <div class="d-flex flex-wrap">
        <div class="nav-item mb-3" v-for="n in 10" :key="n">
          <i class="sprite sprite-news"></i>
          <div class="mt-2">爆料站</div>
        </div>
      </div>
      <div class="bg-light py-2 fs-sm">
        <i class="sprite sprite-arrow mr-1"></i>
        <span>收起</span>
      </div>
    </div>

    <!-- 新闻卡片 -->
    <m-list-card icon="menu" title="新闻资讯" :categories="newsCats">
      <template #items="{category}">
        <router-link 
          class="py-2 fs-lg d-flex" 
          v-for="(news, i) in category.newsList" 
          :key="i"
          tag="div"
          :to="`/article/${news._id}`"
        >
          <span class="text-gray">[{{news.categoryName}}]</span>
          <span class="px-1">|</span>
          <span class="flex-1 text-dark text-ellipsis pr-2">{{news.title}}</span>
          <span class="text-gray fs-sm">{{news.createdAt|date}}</span>
        </router-link>
      </template>
    </m-list-card>

    <!-- 英雄卡片 -->
    <m-list-card icon="menu" title="英雄列表" :categories="heroCats">
      <template #items="{category}">
        <div class="d-flex flex-wrap" style="margin: 0 -0.5rem">
          <router-link 
            class="p-2 text-center" 
            v-for="(hero, i) in category.heroList" :key="i"
            style="width: 20%"
            tag="div"
            :to="`/hero/${hero._id}`"
          >
            <img class="w-100" :src="hero.avatar" alt="">
            <div>{{hero.name}}</div>
          </router-link>
        </div>
      </template>
    </m-list-card>
  </div>
</template>

<script>
import dayjs from "dayjs";
export default {
  name: "Home",
  components: {},
  filters: {
    date(val) {
      return dayjs(val).format("MM/DD");
    }
  },
  data() {
    return {
      images: [
        "../assets/images/654e2025b51f89efd0646f328fc86986.jpeg",
        "../assets/images/740e3c5ff2bb22f40f20317ec53afe30.jpeg",
        "../assets/images/1c86348d9d7a0c06b8162f703e087613.jpeg"
      ],
      swiperOption: {
        pagination: {
          el: ".pagination-home"
        },
        // autoplay: {delay: 1500}
      },
      newsCats: [],
      heroCats: [],
    };
  },

  methods: {
    async fetchNewsCate() {
      const res = await this.$http.get("news/list");
      this.newsCats = res.data;
    },
    async heroCate() {
      const res = await this.$http.get("heroes/list");
      this.heroCats = res.data;
    },
    
  },

  created() {
    this.fetchNewsCate();
    this.heroCate();
  }
};
</script>

<style lang="scss">
@import "../assets/scss/variables";

.pagination-home {
  .swiper-pagination-bullet {
    opacity: 1;
    border-radius: 0.1538rem;
    background: #fff;
    &.swiper-pagination-bullet-active {
      background: map-get($colors, "info");
    }
  }
}

.nav-icons {
  border-top: 1px solid $border-color;
  border-bottom: 1px solid $border-color;
  .nav-item {
    width: 25%;
    border-right: 1px solid $border-color;
    &:nth-child(4n) {
      border: 0;
    }
  }
}
</style>
