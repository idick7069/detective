<template>
  <v-container>
    <div class="stomach_background" v-html="stomachBackground"></div>
    <div class="stomach" v-html="stomach"></div>
  </v-container>
</template>

<script>
import stomach from "../assets/stomach.svg?raw";
import stomachBackground from '../assets/stomach_background.svg?raw';
export default {
  name: "Stomach",
  data: () => ({
    stomach,
    stomachBackground,
  }),
  mounted() {
    console.log(stomach);
  },
};
</script>
<style scoped>
.stomach {
  height: 100vh;
  widows: 100vw;
  position: absolute;
}
.stomach_background {
  height: 100vh;
  widows: 100vw;
  position: absolute;
}
</style>