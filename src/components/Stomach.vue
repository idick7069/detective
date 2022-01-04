<template>
  <!-- <v-container> -->
  <v-responsive :aspect-ratio="16/9">


    <div class="stomach_background" v-html="stomachBackground"></div>
    <div class="stomach" v-html="stomach" @click="onClick($event)"></div>
    <!-- <v-img class="stomach_hint" :src="stomachHint" @click="isActive = true"
      v-bind:style='{"display": (isActive? "none" : "block" )}'></v-img> -->
    <v-btn flat color="rgba(220, 220, 220, 0.8)" width="180" height="180">
      <v-img :src="logoutIcon" @click="leavePage()" position="0 0"></v-img>
    </v-btn>

  </v-responsive>
  <!-- </v-container> -->
</template>

<script>
  import stomach from "../assets/stomach_scene/stomach_obj.svg?raw";
  import stomachBackground from "../assets/stomach_scene/stomach_bg.svg?raw";
  import stomachHint from "../assets/stomach_scene/stomach_hint.png"
  import cursorIcon from "../assets/cursor/magnifier_cursor.png";
  import manualIcon from "../assets/icon/manual_icon.svg?url";
  import scaleIcon from "../assets/icon/scale_icon.svg?url";
  import logoutIcon from "../assets/icon/logout.png"

  export default {
    name: "Stomach",
    data: () => ({
      stomach,
      stomachBackground,
      cursorIcon,
      stomachHint,
      logoutIcon,
      selectedCursor: `url("` + cursorIcon + `") 2 2, help`,
      isActive: false
    }),
    methods: {
      leavePage() {
        this.$router.go(-1)
      },
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
        '<img  width="100" height="100" src="' + scaleIcon + '"></img>'
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