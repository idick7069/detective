<template>
  <v-container>
    <div class="scaleBackground" v-html="scaleBackground"></div>
    <div class="scaleContent" v-html="scaleContent"></div>
  </v-container>
</template>

<script>
import scaleBackground from "../assets/dialog/scale_bg.svg?raw";
import scaleContent from "../assets/dialog/scale_content.svg?raw"
export default {
  name: "Scale",
  data: () => ({
    scaleBackground,
    scaleContent
  }),
  mounted() {
    console.log(scaleBackground);
  },
};
</script>
<style scoped>
.scaleContent,
.scaleBackground {
  height: 100vh;
  widows: 100vw;
  position: absolute;
}
</style>