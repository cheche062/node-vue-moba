<template>
  <div class="home">
    <swiper :options="swiperOption">
      <swiper-slide>
        <img class="w-100" src="../assets/images/654e2025b51f89efd0646f328fc86986.jpeg" alt />
      </swiper-slide>
      <swiper-slide>
        <img class="w-100" src="../assets/images/654e2025b51f89efd0646f328fc86986.jpeg" alt />
      </swiper-slide>
      <swiper-slide>
        <img class="w-100" src="../assets/images/654e2025b51f89efd0646f328fc86986.jpeg" alt />
      </swiper-slide>
      <div class="swiper-pagination pagination-home text-right px-3 pb-1" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  data() {
    return {
      swiperOption: {
        pagination: {
          el: ".pagination-home"
        }
      }
    };
  }
};
</script>

<style lang="scss">
@import '../assets/scss/variables';

.pagination-home{
  .swiper-pagination-bullet{
    opacity: 1;
    border-radius: 0.1538rem;
    background: #fff;
    &.swiper-pagination-bullet-active{
      background: map-get($colors, 'info')
    }
  }
}

</style>
