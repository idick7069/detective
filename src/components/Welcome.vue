<template>
  <!-- Sizes your content based upon application components -->

  <!-- Provides the application the proper gutter -->
  <v-container>
    <v-responsive :aspect-ratio="16/9">
      <v-img :width="width" :src="welcome"> </v-img>
    </v-responsive>
    <!-- <div style="height:1080px width:1920">
                <v-img :src="welcome" />
            </div> -->
    <!-- <v-img :width="width" :height="height" :src="welcome"> </v-img>   -->
    <Town></Town>

  </v-container>
</template>


<script>
  import welcome from "../assets/welcome.png";
  import Town from "../components/Town.vue"
  export default {
    name: "Container",
    data: () => ({
      width: "100vw",
      welcome,
    }),
    components: {
      Town
    }
  };
</script>