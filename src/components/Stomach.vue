<template>
  <!-- <v-container> -->
  <div class="stomach_background" v-html="stomachBackground"></div>
  <div class="stomach" v-html="stomach"></div>
  <!-- </v-container> -->
</template>

<script>
  import stomach from "../assets/stomach_scene/stomach_obj.svg?raw";
  import stomachBackground from '../assets/stomach_scene/stomach_bg.svg?raw';
  import cursorIcon from '../assets/cursor/magnifier_cursor.png'
  import manualIcon from '../assets/icon/manual_icon.svg?url'
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
      this.$emit('update:inputValue', '<v-img src="'+manualIcon+'"></v-img>' );
    },
    props: {
      inputValue: {
        type: String
      }
    }
  };
</script>
<style>
  .stomach {
    height: 100vh;
    width: 100vw;
    position: absolute;
  }

  .stomach_background {
    height: 100vh;
    width: 100vw;
    position: absolute;
  }

  [data-name="cigarette"] {
    cursor: v-bind(selectedCursor);
  }
</style>