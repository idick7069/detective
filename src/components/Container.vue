<template>
  <!-- Sizes your content based upon application components -->
  <v-main style="padding: 0px">
    <!-- Provides the application the proper gutter -->
    <!-- <v-container fluid> -->
    <router-view></router-view>
    <div>
      <v-btn
        class="fixedContainer"
        dark
        bottom
        right
        height="100"
        width="100"
        color="red"
        variant="default"
      >
        <div v-html="inputValue"></div>
        <v-dialog v-model="dialog" activator="parent" fullscreen="true">
          <div class="dialogBg" v-html="dialogBgHtml"></div>
          <div class="dialogContent" v-html="dialogContentHtml"></div>
          <v-btn
            flat
            color="transparent"
            width="80"
            height="80"
            class="closeBtn"
            position="absolute"
            right
            top
          >
            <v-img :src="close_icon" @click="closeDialog()"></v-img>
          </v-btn>
        </v-dialog>
      </v-btn>
    </div>
    <!-- </v-container> -->
  </v-main>
</template>


<script>
import manual from "../assets/dialog/manual_bg.svg?raw";
import manual_item_1 from "../assets/dialog/manual_content.svg?raw";
import scale_form from "../assets/dialog/scale_bg.svg?raw";
import scale_content from "../assets/dialog/scale_content.svg?raw";
import scale_icon from "../assets/icon/scale_icon.svg?url";

import close_icon from "../assets/icon/close.png";
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
    this.$store.commit("setDialogOpen", false);
    this.dialog = this.$store.state.dialogOpen;
  },
  watch: {
    "$store.state.floatingTemplate": function (newVal) {
      this.inputValue = this.$store.state.floatingTemplate;
    },
    "$store.state.floatingDialog": function (newVal) {
      if (newVal == false) {
        this.dialogBgHtml = manual;
        this.dialogContentHtml = manual_item_1;
      } else {
        this.dialogBgHtml = scale_form;
        this.dialogContentHtml = scale_content;
      }
    },
    "$store.state.dialogOpen": function (newVal) {
      this.dialog = this.$store.state.dialogOpen;
    },
    dialog: function () {
      window.setTimeout(() => {
        this.resizeSvg();
      }, 500);
    },
  },
  methods: {
    closeDialog() {
      this.dialog = false;
      this.$store.commit("setDialogOpen", false);
    },
    resizeChild(myElement, widthScale, heightScale) {

      for (let i = 0; i < myElement.children.length; i++) {
        var reSizeWidth =
          myElement.children[i].getAttribute("width") * widthScale;
        var reSizeHeight =
          myElement.children[i].getAttribute("height") * heightScale;
        myElement.children[i].setAttribute("width", reSizeWidth);
        myElement.children[i].setAttribute("height", reSizeHeight);
        var originalx = myElement.children[i].getAttribute("x");
        if (originalx != null) {
          myElement.children[i].setAttribute("x", originalx * widthScale);
        }
        var originaly = myElement.children[i].getAttribute("y");
        if (originaly != null) {
          myElement.children[i].setAttribute("y", originaly * heightScale);
        }
      }
    },
    resizeSvg() {
      console.log("resize");

      var widthScale = window.screen.width / 1920.0;
      var heightScale = (window.screen.width * 0.5625) / 1080.0;
      var containerWidth = window.screen.width;
      var containerHeight = window.screen.width * 0.5625;
      if (document.getElementById("manual-bg") != null) {
        document
          .getElementById("manual-bg")
          .setAttribute("width", containerWidth);
        document
          .getElementById("manual-bg")
          .setAttribute("height", containerHeight);
        document
          .getElementById("manual-content")
          .setAttribute("width", containerWidth);
        document
          .getElementById("manual-content")
          .setAttribute("height", containerHeight);

        document
          .getElementById("manual-bg")
          .setAttribute(
            "viewBox",
            "0 0 " + containerWidth + " " + containerHeight
          );
        document
          .getElementById("manual-content")
          .setAttribute(
            "viewBox",
            "0 0 " + containerWidth + " " + containerHeight
          );

        var myElement = document.getElementById("manual-bg");
        this.resizeChild(myElement, widthScale, heightScale);
        myElement = document.getElementById("manual-content");
        this.resizeChild(myElement, widthScale, heightScale);
      } else if (document.getElementById("scale-bg") != null) {
        document
          .getElementById("scale-bg")
          .setAttribute("width", containerWidth);
        document
          .getElementById("scale-bg")
          .setAttribute("height", containerHeight);
        document
          .getElementById("scale-content")
          .setAttribute("width", containerWidth);
        document
          .getElementById("scale-content")
          .setAttribute("height", containerHeight);

        document
          .getElementById("scale-bg")
          .setAttribute(
            "viewBox",
            "0 0 " + containerWidth + " " + containerHeight
          );
        document
          .getElementById("scale-content")
          .setAttribute(
            "viewBox",
            "0 0 " + containerWidth + " " + containerHeight
          );

        var myElement2 = document.getElementById("scale-bg");
        this.resizeChild(myElement2, widthScale, heightScale);
        myElement2 = document.getElementById("scale-content");
        this.resizeChild(myElement2, widthScale, heightScale);
      }
    },
  },
};
</script>
<style scoped>
@media (min-width: 1920px) {
  .v-container {
    max-width: 100vw;
    padding: 0px;
  }
}

@media (min-width: 1px) {
  .v-container {
    max-width: 100vw;
    padding: 0px;
  }
}

.fixedContainer {
  position: fixed;
  transform: translate(-10%, -10%);
  z-index: 2;
}

@media (orientation: portrait) {
  .fixedContainer {
    z-index: -1;
  }
}

.dialogBg {
  position: absolute;
}

.dialogContent {
  pointer-events: none;
  position: absolute;
}

.closeBtn {
  transform: translate(-10px, -10px);
}
</style>