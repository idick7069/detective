<template>
  <!-- Sizes your content based upon application components -->
  <v-main style="padding: 0px">
    <!-- Provides the application the proper gutter -->
    <v-container fluid>
      <router-view></router-view>
      <div>
        <v-btn class="fixedContainer" dark bottom right height="100" width="100" color="red" variant="default">
          <div v-html="inputValue"></div>
          <v-dialog v-model="dialog" activator="parent" fullscreen>
            <div class="dialogBg" v-html="dialogBgHtml"></div>
            <div class="dialogContent" v-html="dialogContentHtml"></div>
            <v-btn flat color="transparent" width="80" height="80" class="closeBtn" position="absolute" right top>
              <v-img :src="close_icon" @click="dialog = false"></v-img>
            </v-btn>
          </v-dialog>
        </v-btn>
      </div>
    </v-container>
  </v-main>
</template>


<script>
  import manual from "../assets/manual.svg?raw";
  import manual_item_1 from "../assets/manual_item_1.svg?raw";
  import scale_form from "../assets/scale_form.svg?raw";
  import scale_content from "../assets/scale_content.svg?raw";
  import scale_icon from "../assets/icon/scale_icon.svg?url";

  import close_icon from "../assets/icon/close.png"
  export default {
    name: "Container",
    data: () => ({
      dialog: false,
      manual,
      manual_item_1,
      scale_form,
      scale_content,
      close_icon,
      inputValue: '<img width="100" height="100" src="' + scale_icon + '"></img>',
      dialogBgHtml: scale_form,
      dialogContentHtml: scale_content,
    }),
    mounted() {
      this.$store.commit(
        "setFloatingTemplate",
        '<img  width="100" height="100" src="' + scale_icon + '"></img>'
      );
      this.inputValue = this.$store.state.floatingTemplate;

      this.$store.commit("setFloatingDialog", true);
    },
    watch: {
      "$store.state.floatingTemplate": function (newVal) {
        this.inputValue = this.$store.state.floatingTemplate;
      },
      "$store.state.floatingDialog": function (newVal) {
        if ((newVal == false)) {
          this.dialogBgHtml = manual;
          this.dialogContentHtml = manual_item_1;
        } else {
          this.dialogBgHtml = scale_form;
          this.dialogContentHtml = scale_content;
        }
      },
    },
    methods: {
      say: function (message) {
        alert(message);
      },
    },
  };
</script>
<style scoped>
  @media (min-width: 1920px) {
    .v-container {
      max-width: 1920px;
      padding: 0px;
    }
  }

  .fixedContainer {
    position: fixed;
    transform: translate(-50px, -50px);
  }

  .dialogBg {
    position: absolute;
  }

  .dialogContent {
    pointer-events: none;
    position: absolute;
  }

  .closeBtn {
    transform: translate(-10px, 10px);
  }
</style>
<style>
  [data-name="red_tag"] {
    pointer-events: auto;
  }
</style>