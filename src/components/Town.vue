<template>
  <!-- Provides the application the proper gutter -->

  <!-- <v-container> -->
  <div ref="responsive" style="width:100vw;height:56.25vw">
    <div class="townBackground" v-html="townBackground"></div>
    <div class="townCar" v-html="townCar"></div>
    <div class="townBuilding" v-html="townBuilding" @click="onClick($event)" @mouseover="nextTab($event)">
    </div>
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
    }),
    methods: {
      nextTab(event) {
        console.log("You clicked on an element with class name = " + event.target.id);
      },
      onClick(event) {
        let targetId = event.target.id
        if (targetId == 'stomach') {
          document.querySelector('[data-name="pin-stomach"]').style.animation = 'none';
          this.$router.push({
            name: "Stomach"
          })
        } else {
          this.$router.push({
            name: 'TempSence', 
            params: {
             id: targetId
            }
          })
        }
      },
      resizeChild(myElement, widthScale, heightScale) {

        for (let i = 0; i < myElement.children.length; i++) {
          var reSizeWidth = myElement.children[i].getAttribute("width") * widthScale
          var reSizeHeight = myElement.children[i].getAttribute("height") * heightScale
          myElement.children[i].setAttribute("width", reSizeWidth);
          myElement.children[i].setAttribute("height", reSizeHeight);
          var originalx = myElement.children[i].getAttribute("x")
          if (originalx != null) {
            myElement.children[i].setAttribute("x", originalx * widthScale);
          }
          var originaly = myElement.children[i].getAttribute("y")
          if (originaly != null) {
            myElement.children[i].setAttribute("y", originaly * heightScale);
          }
        }
      },
      resizeSvg() {
        console.log("resize");

        var widthScale = this.$refs.responsive.clientWidth / 1920.0
        var heightScale = this.$refs.responsive.clientHeight / 1080.0
        var containerHeight = this.$refs.responsive.clientHeight;
        var containerWidth = this.$refs.responsive.clientWidth;
        console.log(widthScale);
        console.log(heightScale);
        document.getElementById("town-car").setAttribute("width", containerWidth);
        document.getElementById("town-building").setAttribute("width", containerWidth);
        document.getElementById("town-bg").setAttribute("width", containerWidth);
        document.getElementById("town-car").setAttribute("height", containerHeight);
        document.getElementById("town-building").setAttribute("height", containerHeight);
        document.getElementById("town-bg").setAttribute("height", containerHeight);
        document.getElementById("town-building").setAttribute("viewBox", "0 0 " + containerWidth + " " +
          containerHeight);
        document.getElementById("town-car").setAttribute("viewBox", "0 0 " + containerWidth + " " + containerHeight);
        document.getElementById("town-bg").setAttribute("viewBox", "0 0 " + containerWidth + " " + containerHeight);

        var myElement = document.getElementById('town-bg');

        this.resizeChild(myElement, widthScale, heightScale);

        myElement = document.getElementById('town-car');

        this.resizeChild(myElement, widthScale, heightScale);

        myElement = document.getElementById('town-building');

        this.resizeChild(myElement, widthScale, heightScale);

      },
    },
    mounted() {
      this.resizeSvg();
    },
  }
</script>
<style>
  .townCar,
  .townBackground,
  .townBuilding {
    /* height: 56.25vw;
    width: 100vw; */
    position: absolute;
  }


  [data-name="sign"]:hover {
    animation: drag 2s infinite;
    transform-origin: center center;
    transform-box: fill-box;
  }

  #trigger_door_man:hover~#cart {
    /* animation: drag 2s infinite;
  transform-origin: center bottom;
  transform-box: fill-box; */
    opacity: 1;
  }

  [data-name="trigger_door_man"] {
    cursor: v-bind(selectedCursor);
  }

  [data-name="stomach"] {
    cursor: v-bind(selectedCursor);
  }

  [data-name="stomach"]:after {
    animation: floating 2s infinite;
    transform-origin: center center;
    transform-box: fill-box;
  }

  #cart {
    opacity: 0;
    -webkit-transition: all 500ms ease-in-out;
    -moz-transition: all 500ms ease-in-out;
    -ms-transition: all 500ms ease-in-out;
    -o-transition: all 500ms ease-in-out;
    transition: all 500ms ease-in-out;
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

  @keyframes drag {
    0% {
      transform: rotate(0deg);
    }

    80% {
      transform: rotate(0deg);
    }

    85% {
      transform: rotate(10deg);
    }

    90% {
      transform: rotate(-6deg);
    }

    95% {
      transform: rotate(3deg);
    }

    100% {
      transform: rotate(0deg);
    }
  }
</style>