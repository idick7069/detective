<template>
  <!-- <v-container> -->
  <div ref="responsive" style="width: 100vw; height: 56.25vw">
    <div class="stomach_background" v-html="stomachBackground"></div>
    <div class="stomach" v-html="stomach" @click="onClick($event)"></div>
    
  </div>
  <div class="logout">
      <v-btn flat color="rgba(220, 220, 220, 0.8)" width="180" height="180">
        <v-img :src="logoutIcon" @click="leavePage()" position="0 0"></v-img>
      </v-btn>
    </div>
  <img class="stomach_hint" id="stomach_hint" :src="stomachHint" @click="isActive = true"
      v-bind:style='{"display": (isActive? "none" : "block" )}'/>

  <!-- </v-container> -->
</template>

<script>
import stomach from "../assets/stomach_scene/stomach_obj.svg?raw";
import stomachBackground from "../assets/stomach_scene/stomach_bg.svg?raw";
import stomachHint from "../assets/stomach_scene/stomach_hint.png";
import cursorIcon from "../assets/cursor/magnifier_cursor.png";
import manualIcon from "../assets/icon/manual_icon.svg?url";
import scaleIcon from "../assets/icon/scale_icon.svg?url";
import logoutIcon from "../assets/icon/logout.png";

export default {
  name: "Stomach",
  data: () => ({
    stomach,
    stomachBackground,
    cursorIcon,
    stomachHint,
    logoutIcon,
    selectedCursor: `url("` + cursorIcon + `") 2 2, help`,
    isActive: false,
    isResized: false,
  }),
  methods: {
    leavePage() {
      this.$router.go(-1);
    },
    onClick(event) {
      let targetId = event.target.id;
      console.log(targetId);
      if (targetId == "cigarette") {
        this.$store.commit("setDialogOpen", true);
      }
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
      console.log(widthScale);
      console.log(heightScale);
       document
        .getElementById("stomach_hint")
        .setAttribute("width", containerWidth);
      document
        .getElementById("stomach_hint")
        .setAttribute("height", containerHeight);

      document
        .getElementById("in_cabinet")
        .setAttribute("width", containerWidth);
      document
        .getElementById("in_cabinet")
        .setAttribute("height", containerHeight);

      document
        .getElementById("in_cabinet_bg")
        .setAttribute("width", containerWidth);
      document
        .getElementById("in_cabinet_bg")
        .setAttribute("height", containerHeight);

      document
        .getElementById("in_cabinet_bg")
        .setAttribute(
          "viewBox",
          "0 0 " + containerWidth + " " + containerHeight
        );
      document
        .getElementById("in_cabinet")
        .setAttribute(
          "viewBox",
          "0 0 " + containerWidth + " " + containerHeight
        );

      var myElement = document.getElementById("in_cabinet");

      this.resizeChild(myElement, widthScale, heightScale);

      myElement = document.getElementById("in_cabinet_bg");

      this.resizeChild(myElement, widthScale, heightScale);
    },
    handleOrientationChange() {
      const orientation = window.screen.orientation.type;
      if (orientation === "portrait-primary") {
        // portrait mode
      } else if (orientation === "landscape-primary") {
        var needResize = false;
        if (
          document.getElementById("in_cabinet_bg").getAttribute("width") == 1920
        ) {
          needResize = true;
        }
        if (needResize) {
          this.isResized = true;
          this.resizeSvg();
        }
        // landscape mode
      }
    },
  },
  //onCreate
  mounted() {
    // this.resizeSvg();
    this.$store.commit(
      "setFloatingTemplate",
      '<img  width="100" height="100" src="' + manualIcon + '"></img>'
    );
    this.$store.commit("setFloatingDialog", false);

    const orientation = window.screen.orientation.type;

    if (
      document.getElementById("in_cabinet_bg").getAttribute("width") == 1920 &&
      orientation === "landscape-primary"
    ) {
      this.needResize = true;
    }
    if (this.needResize) {
      this.isResized = true;
      this.resizeSvg();
    }
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
.stomach {
  position: absolute;
}
.stomach_hint{
   top: 0;
  left: 0;
  position: absolute;
}

.logout {
  top: 0;
  left: 0;
  position: absolute;
  cursor: pointer;
}
#cigarette {
  cursor: v-bind(selectedCursor);
}
</style>