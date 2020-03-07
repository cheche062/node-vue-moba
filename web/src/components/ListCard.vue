<template>
  <m-card :title="title" :icon="icon">
    <!-- 卡片导航 -->
    <div class="nav jc-between">
      <div 
        class="nav-item"
        v-for="(category, i) in categories" 
        :class="{active: active == i}" 
        :key="i"
        @click="active = i"
      >
        <div class="nav-link">{{category.name}}</div>
      </div>
    </div>

    <!-- 卡片内容 -->
    <div class="pt-3">
      <swiper>
        <swiper-slide v-for="(category, i) in categories" :key="i">
          <slot name="items" :category="category"></slot>
        </swiper-slide>
      </swiper>
    </div>
  </m-card>
</template>

<script>
export default {
  props: {
    title: { type: String, required: true },
    icon: { type: String, required: true },
    categories: { type: Array, required: true },  
  },
  data() {
    return {
      active: 0
    }
  }
}
</script>

<style>



</style>