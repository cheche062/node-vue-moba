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

    <!-- 卡片 -->
    <m-list-card icon="menu" title="新闻资讯" :categories="newsCats">
      <template #items="{category}">
        <div class="py-2" v-for="(news, i) in category.newsList" :key="i">
          <span>[{{news.categoryName}}]</span>
          <span>|</span>
          <span>{{news.title}}</span>
          <span>{{news.date}}</span>
        </div>
      </template>
    </m-list-card>

    <p>aaa</p>
    <p>aaa</p>
    <p>aaa</p>
    <p>aaa</p>
    <p>aaa</p>
    <p>aaa</p>
    <p>aaa</p>
    <p>aaa</p>
    <p>aaa</p>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
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
        }
        // autoplay: {delay: 1500}
      },
      newsCats: [
        {
          name: "热门",
          newsList: [
            {
              categoryName: "公告",
              title: "今天天气真不错！",
              date: "02/02"
            },
            {
              categoryName: "公告",
              title: "今天天气真不错！",
              date: "02/02"
            },
            {
              categoryName: "公告",
              title: "今天天气真不错！",
              date: "02/02"
            }
          ]
        },
        {
          name: "热门6666",
          newsList: [
            {
              categoryName: "公告",
              title: "今天天气真不错！",
              date: "02/02"
            },
            {
              categoryName: "公告",
              title: "今天天气真不错！",
              date: "02/02"
            },
            {
              categoryName: "公告",
              title: "今天天气真不错！",
              date: "02/02"
            }
          ]
        },
        {
          name: "热门3333",
          newsList: [
            {
              categoryName: "公告",
              title: "今天天气真不错！",
              date: "02/02"
            },
            {
              categoryName: "公告",
              title: "今天天气真不错！",
              date: "02/02"
            },
            {
              categoryName: "公告",
              title: "今天天气真不错！",
              date: "02/02"
            }
          ]
        }
      ]
    };
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
