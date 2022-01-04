<template>
  <!-- Provides the application the proper gutter -->

  <!-- <v-container> -->


  <div class="townBackground" ref="responsive" v-html="townBackground"></div>
  <div class="townCar" v-html="townCar"></div>
  <div class="townBuilding" v-html="townBuilding" ref="mydiv" @click="initTab($event)" @mouseover="nextTab($event)">
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
      initTab(event) {
        let targetId = event.target.id
        if (targetId == 'stomach') {
          document.querySelector('[data-name="pin-stomach"]').style.animation = 'none';
          this.$router.push({
            name: "Stomach"
          })
        }
      },
      resizeSvg() {
        console.log("resize");
        console.log(this.$refs.responsive.clientHeight);
        var containerHeight = this.$refs.responsive.clientHeight;
        var containerWidth = this.$refs.responsive.clientWidth;
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
    height: 56.25vw;
    width: 100vw;
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