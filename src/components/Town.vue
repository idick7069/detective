<template>
  <!-- Provides the application the proper gutter -->

  <!-- <v-container> -->
  <div ref="responsive" style="width: 100vw; height: 56.25vw">
    <div class="townBackground" v-html="townBackground"></div>
    <div class="townCar" v-html="townCar"></div>
    <div
      class="townBuilding"
      v-html="townBuilding"
      @click="onClick($event)"
      @mouseover="nextTab($event)"
    ></div>
  </div>
  <!-- </v-container> -->
</template>

<script>
import townBuilding from "../assets/town_scene/town_building.svg?raw";
import townBackground from "../assets/town_scene/town_bg.svg?raw";
import townCar from "../assets/town_scene/town_car.svg?raw";
export default {
  name: "Town",
  data: () => ({
    townBuilding,
    townBackground,
    townCar,
    isResized: false,
  }),
  methods: {
    nextTab(event) {
      console.log(
        "You clicked on an element with class name = " + event.target.id
      );
    },
    onClick(event) {
      let targetId = event.target.id;
      let targetArray = [
        "station",
        "school",
        "stomach",
        "lung",
        "heart",
        "park",
        "nerve",
        "community",
      ];
      if (targetId == "stomach") {
        document.querySelector('[data-name="pin-stomach"]').style.animation =
          "none";
        this.$router.push({
          name: "Stomach",
        });
      } else if (targetArray.indexOf(targetId) != -1) {
        this.$router.push({
          name: "TempSence",
          params: {
            id: targetId,
          },
        });
      }
    },
    resizeChild(myElement, widthScale, heightScale) {
      console.log("resize child");

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
      console.log(containerWidth);
      console.log(containerHeight);
      document.getElementById("town-car").setAttribute("width", containerWidth);
      document
        .getElementById("town-building")
        .setAttribute("width", containerWidth);
      document.getElementById("town-bg").setAttribute("width", containerWidth);
      document
        .getElementById("town-car")
        .setAttribute("height", containerHeight);
      document
        .getElementById("town-building")
        .setAttribute("height", containerHeight);
      document
        .getElementById("town-bg")
        .setAttribute("height", containerHeight);
      document
        .getElementById("town-building")
        .setAttribute(
          "viewBox",
          "0 0 " + containerWidth + " " + containerHeight
        );
      document
        .getElementById("town-car")
        .setAttribute(
          "viewBox",
          "0 0 " + containerWidth + " " + containerHeight
        );
      document
        .getElementById("town-bg")
        .setAttribute(
          "viewBox",
          "0 0 " + containerWidth + " " + containerHeight
        );

      var myElement = document.getElementById("town-bg");

      this.resizeChild(myElement, widthScale, heightScale);

      myElement = document.getElementById("town-car");

      this.resizeChild(myElement, widthScale, heightScale);

      myElement = document.getElementById("town-building");

      this.resizeChild(myElement, widthScale, heightScale);
    },
    handleOrientationChange() {
      const orientation = window.screen.orientation.type;
      if (orientation === "portrait-primary") {
        // portrait mode
      } else if (orientation === "landscape-primary") {
        var needResize = false;
        if (document.getElementById("town-bg").getAttribute("width") == 1920) {
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
  mounted() {
    const orientation = window.screen.orientation.type;

    if (
      document.getElementById("town-bg").getAttribute("width") == 1920 &&
      orientation === "landscape-primary"
    ) {
      this.needResize = true;
    }
    if (this.needResize) {
      this.isResized = true;
      this.resizeSvg();
    }
  },
  created() {
    window.addEventListener("orientationchange", this.handleOrientationChange);
  },
  destroyed() {
    window.removeEventListener(
      "orientationchange",
      this.handleOrientationChange
    );
  },
};
</script>
<style>
.townCar,
.townBackground,
.townBuilding {
  position: absolute;
}

[data-name="stomach"] {
  cursor: v-bind(selectedCursor);
}

[data-name="stomach"]:after {
  animation: floating 2s infinite;
  transform-origin: center center;
  transform-box: fill-box;
}

[data-name="pin-station"],
[data-name="pin-school"],
[data-name="pin-stomach"],
[data-name="pin-lung"],
[data-name="pin-heart"],
[data-name="pin-park"],
[data-name="pin-nerve"],
[data-name="pin-community"] {
  animation: floating 2s infinite;
  transform-origin: center center;
  transform-box: fill-box;
}

[data-name="station"],
[data-name="school"],
[data-name="stomach"],
[data-name="lung"],
[data-name="heart"],
[data-name="park"],
[data-name="nerve"],
[data-name="community"] {
  cursor: pointer;
}

@keyframes floating {
  0% {
    transform: translate(0, 0px);
  }

  50% {
    transform: translate(0, -15px);
  }

  90% {
    transform: translate(0, -20px);
  }

  100% {
    transform: translate(0, -0px);
  }
}
</style>