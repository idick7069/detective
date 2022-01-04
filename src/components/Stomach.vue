<template>
  <!-- <v-container> -->
  <v-responsive :aspect-ratio="16/9">


    <div class="stomach_background" v-html="stomachBackground"></div>
    <div class="stomach" v-html="stomach" @click="onClick($event)"></div>
    <!-- <v-img class="stomach_hint" :src="stomachHint" @click="isActive = true"
      v-bind:style='{"display": (isActive? "none" : "block" )}'></v-img> -->
  </v-responsive>
  <!-- </v-container> -->
</template>

<script>
  import stomach from "../assets/stomach_scene/stomach_obj.svg?raw";
  import stomachBackground from "../assets/stomach_scene/stomach_bg.svg?raw";
  import stomachHint from "../assets/stomach_scene/stomach_hint.png"
  import cursorIcon from "../assets/cursor/magnifier_cursor.png";
  import manualIcon from "../assets/icon/manual_icon.svg?url";
  import scale_icon from "../assets/icon/scale_icon.svg?url";

  export default {
    name: "Stomach",
    data: () => ({
      stomach,
      stomachBackground,
      cursorIcon,
      stomachHint,
      selectedCursor: `url("` + cursorIcon + `") 2 2, help`,
      isActive: false
    }),
    methods: {
      onClick(event) {

        let targetId = event.target.id
        console.log(targetId)
        if (targetId == 'cigarette') {
          this.$store.commit("setDialogOpen", true);
        }
      },
    },
    //onCreate
    mounted() {
      this.$store.commit(
        "setFloatingTemplate",
        '<img  width="100" height="100" src="' + manualIcon + '"></img>'
      );
      this.$store.commit("setFloatingDialog", false);
    },
    //onDestory
    beforeUnmount() {
      this.$store.commit(
        "setFloatingTemplate",
        '<img  width="100" height="100" src="' + scale_icon + '"></img>'
      );
      this.$store.commit("setFloatingDialog", true);
    },
  };
</script>
<style>
  .stomach_background,
  .stomach_hint,
  .stomach {
    height: 56.25vw;
    width: 100vw;
    position: absolute;
  }


  [data-name="cigarette"] {
    cursor: v-bind(selectedCursor);
  }
</style>