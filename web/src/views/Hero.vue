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

    <!-- <img :src="model.avatar" alt=""> -->

    <div class="top d-flex jc-end flex-column" :style="{'background-image': `url(${model.banner})`}">
      <div class="info text-white p-3">
        <div class="fs-sm">{{model.title}}</div>
        <h2 class="my-2">{{model.name}}</h2>
        <!-- <div class="fs-sm">{{[...model.categories].map(v=>v.name).join('/')}}</div> -->
        <div class="d-flex jc-between pt-2">
          <div class="scores d-flex ai-center" v-if="model.scores">
            <span>难度</span>
            <span class="badge bg-primary">{{model.scores.difficult}}</span>
            <span>技能</span>
            <span class="badge bg-blue">{{model.scores.skills}}</span>
            <span>攻击</span>
            <span class="badge bg-danger">{{model.scores.attack}}</span>
            <span>生存</span>
            <span class="badge bg-info">{{model.scores.survive}}</span>
          </div>
          <router-link to="/" tag="span" class="text-gray fs-sm">
            皮肤: 2 &gt;
          </router-link>
        </div>
      </div>
    </div>

    <div>
      <div class="px-3 bg-white">
        <div class="nav d-flex jc-around py-2 pt-3 pb-2 border-bottom">
          <div class="nav-item active">
            <div class="nav-link">英雄初识</div>
          </div>
          <div class="nav-item">
            <div class="nav-link">进阶攻略</div>
          </div>
        </div>
      </div>

      <swiper>
        <swiper-slide>
          <div>
            <div class="p-3 bg-white border-bottom">
              <div class="d-flex jc-around">
                <router-link class="btn btn-lg flex-1" tag="button" to="/">
                  <i class="iconfont icon-menu"></i>
                  英雄介绍视频
                </router-link>
                <router-link class="btn btn-lg flex-1 ml-2" tag="button" to="/">
                  <i class="iconfont icon-menu"></i>
                  一图识英雄
                </router-link>
              </div>

              <div class="skills bg-white mt-4">
                <div class="d-flex jc-around ">
                  <img 
                    class="icon"
                    :class="{active: currentSkillIndex === i}"
                    @click="currentSkillIndex = i"
                    :src="item.icon" 
                    v-for="(item, i) in model.skills" 
                    :key="i"
                    width="60"
                    height="60"
                  >
                </div>
                <div v-if="currentSkill" class="">
                  <div class="d-flex pt-4 pb-3">
                    <h3 class="m-0">{{currentSkill.name}}</h3>
                    <span class="ml-4 text-gray">(冷却值：{{currentSkill.delay}} 消耗：{{currentSkill.cost}})</span>
                  </div>
                  <p>{{currentSkill.description}}</p>
                  <div class="border-bottom"></div>
                  <p>小提示：{{model.usageTips}}</p>
                </div>
              </div>
            </div>

          </div>
        </swiper-slide>

        <swiper-slide>
          
        </swiper-slide>
      </swiper>


    </div>

  </div>
</template>

<script>
export default {
  props: {
    id: { required: true }
  },

  data() {
    return {
      model: {},
      currentSkillIndex: 0
    };
  },
  computed: {
    currentSkill() {
      return this.model.skills[this.currentSkillIndex]
    }
  },

  methods: {
    async fetch() {
      const res = await this.$http.get(`/heroes/${this.id}`);
      this.model = res.data;

      console.log("数据====", res.data);
      
    }
  },
  created() {
    this.fetch();
  }
};
</script>

<style lang="scss">
@import "../assets/scss/variables";

.page-hero{
  .top{
    height: 50vw;
    background-size: 100% auto;
  }

  .info{
    background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,1));
    .scores{
      .badge{
        margin: 0 0.25rem;
        display: inline-block;
        width: 1rem;
        height: 1rem;
        line-height: 1rem;
        text-align: center;
        border-radius: 50%;
        font-size: 0.8rem;
        border: 1px solid rgba(255, 255, 255, 0.6);
      }
    }
  }
  .icon.active{
    border: 1px solid #f00;
  }

  .skills{
    img.icon{
      border: 3px solid map-get($colors, 'white');
      border-radius: 45%;
      &.active{
        border: 3px solid map-get($colors, 'primary');
      }
    }
  }
}

</style>