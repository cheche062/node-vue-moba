<template>
  <div class="page-hero">
    <div class="topbar bg-black py-2 px-3 d-flex ai-center text-white">
      <img src="../assets/logo1.png" alt height="30" />
      <div class="pl-2 flex-1">
        <span class="">王者荣耀</span>
        <span class="ml-2">攻略站</span>
      </div>
      <router-link to="/" tag="div" class="">更多英雄 &gt;</router-link>
    </div>

    <img :src="model.avatar" alt="">

  </div>
</template>

<script>
export default {
  props: {
    id: { required: true }
  },

  data() {
    return {
      model: {}
    };
  },

  methods: {
    async fetch() {
      const res = await this.$http.get(`/heroes/${this.id}`);
      this.model = res.data;
    }
  },
  created() {
    this.fetch();

    // console.log(this.$route);
  }
};
</script>

<style lang="scss">
</style>