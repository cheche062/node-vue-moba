<template>
  <div class="page-article" v-if="model">
    <div class="d-flex py-3 px-2 border-bottom text-blue">
      <div class="iconfont icon-back" @click="$router.back()"></div>
      <strong class="flex-1 pl-2">{{model.title}}</strong>
      <div class="text-gray fs-xs">{{model.createTime}}</div>
    </div>

    <div class="px-2 body fs-lg" v-html="model.body"></div>
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
    }
  },

  watch: {
    id() {
      this.fetch()
    }
  },

  methods: {
    async fetch() {
      const res = await this.$http.get(`/argicles/${this.id}`);
      this.model = res.data
    },
  },
  created() {
    this.fetch()
  }
};
</script>

<style lang="scss">
.page-article{
  .icon-back{
    font-size: 1.3846rem;
  }
  .body{
    img{
      max-width:100%;
      height: auto;
    }
  }

}

</style>