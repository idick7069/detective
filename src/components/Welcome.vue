<template>
  <!-- Sizes your content based upon application components -->

  <!-- Provides the application the proper gutter -->

  <!-- <v-container> -->

  <div class="content">
    <Toolbar />
    <!-- <v-responsive :aspect-ratio="16/9"> -->
    <!-- <v-img :width="width" :src="welcome"> </v-img> -->
    <!-- </v-responsive> -->
    <!-- <div style="height:1080px width:1920">
      <v-img :src="welcome" />
    </div> -->
    <!-- <v-img :width="width" :height="height" :src="welcome"> </v-img>   -->
    <!-- <v-responsive :aspect-ratio="16/9"> -->
    <AnimatePage></AnimatePage>
    <v-responsive :aspect-ratio="16/9">
      <Town></Town>
    </v-responsive>
  </div>
  <div class="mask">
    <h1 class="mask_text">請使用橫向螢幕預覽</h1>
  </div>
  <!-- </v-container> -->
</template>


<script>
  import welcome from "../assets/welcome.png";
  import Town from "../components/Town.vue"
  import Toolbar from "../components/Toolbar.vue"
  import AnimatePage from "../components/Animate.vue"
  export default {
    name: "Container",
    data: () => ({
      width: "100vw",
      height: "56.25vw",
      welcome,
    }),
    components: {
      Town,
      Toolbar,
      AnimatePage
    }
  };
</script>
<style scoped>
  .mask {
    background-color: rgba(0, 0, 0, 0.377);
    width: 100vw;
    height: 100vh;
    z-index: 3;
  }

  .mask_text {
    color: white;
    text-align: center;
    width: 100vw;
    justify-content: center;
    line-height: 100vh;
    height: 100vh;
  }

  @media (orientation: portrait) {
    .mask {
      display: block;
    }

    .content {
      display: none;
    }
  }

  @media (orientation: landscape) {
    .mask {
      display: none;
    }

    .content {
      display: block;
    }
  }
</style>