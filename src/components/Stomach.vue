<template>
  <v-container>
    <div class="stomach_background" v-html="stomachBackground"></div>
    <div class="stomach" v-html="stomach"></div>
  </v-container>
</template>

<script>
  import stomach from "../assets/stomach.svg?raw";
  import stomachBackground from '../assets/stomach_background.svg?raw';
  import cursorIcon from '../assets/magnifier_cursor.png'
  export default {
    name: "Stomach",
    data: () => ({
      stomach,
      stomachBackground,
      cursorIcon,
      selectedCursor: `url("` + cursorIcon + `") 2 2, help`,
    }),
    mounted() {
      console.log(cursorIcon);
    },
  };
</script>
<style>
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

  [data-name="smoke"] {
    cursor: v-bind(selectedCursor);
  }
</style>