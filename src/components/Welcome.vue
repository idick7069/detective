<template>
  <!-- Sizes your content based upon application components -->

  <!-- Provides the application the proper gutter -->

  <v-container>
    <Toolbar />
    <!-- <v-responsive :aspect-ratio="16/9"> -->
    <v-img :width="width" :height="height" :src="welcome"> </v-img>
    <!-- </v-responsive> -->
    <!-- <div style="height:1080px width:1920">
      <v-img :src="welcome" />
    </div> -->
    <!-- <v-img :width="width" :height="height" :src="welcome"> </v-img>   -->
    <!-- <v-responsive :aspect-ratio="16/9"> -->
    <v-responsive :aspect-ratio="16/9">
      <Town :width="width" :height="height"></Town>
    </v-responsive>
  </v-container>
</template>


<script>
  import welcome from "../assets/welcome.png";
  import Town from "../components/Town.vue"
  import Toolbar from "../components/Toolbar.vue"
  export default {
    name: "Container",
    data: () => ({
      width: "100vw",
      height: "56.25vw",
      welcome,
    }),
    components: {
      Town,
      Toolbar
    }
  };
</script>