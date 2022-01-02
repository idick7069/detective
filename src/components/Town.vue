<template>
  <!-- Provides the application the proper gutter -->

  <!-- <v-container> -->

  <div class="background" v-html="townBackground"></div>
  <div class="car" v-html="car"></div>
  <div class="scene" v-html="iconRaw" ref="mydiv"></div>

  <!-- </v-container> -->
</template>

<script>
import iconRaw from "../assets/town.svg?raw";
import cursorIcon from "../assets/magnifier_cursor.png";
import townBackground from "../assets/town_background.svg?raw";
import car from "../assets/car.svg?raw";
export default {
  name: "Town",
  data: () => ({
    cursorIcon,
    townBackground,
    selectedCursor: `url("` + cursorIcon + `") 2 2, help`,
    scene_door: "",
    iconRaw,
    hidden: false,
    car,
  }),
  mounted() {
    console.log(cursorIcon);
    var router = this.$router;

    // this.$refs['mydiv'].firstChild.addEventListener('click', function (event) {
    //   event.preventDefault();
    //   console.log('clicked: ', event.target.name);
    //   router.push({
    //     name: "Stomach"
    //   })
    // })
  },
};
</script>
<style>
.scene {
  height: 100vh;
  widows: 100vw;
  position: absolute;
}

.background {
  height: 100vh;
  widows: 100vw;
  position: absolute;
}

.car {
  height: 100vh;
  widows: 100vw;
  position: absolute;
}

[data-name="sign"]:hover {
  animation: drag 2s infinite;
  transform-origin: center center;
  transform-box: fill-box;
}

#trigger_door_man:hover ~ #cart {
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

[data-name="pin-station"]
[data-name="pin-school"]
[data-name="pin-stomach"]
[data-name="pin-lung"]
[data-name="pin-heart"]
[data-name="pin-park"]
[data-name="pin-nerve"]
[data-name="pin-community"]{
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

[data-name="heart"] {
  background-color: yellow;
}

/* [data-name="trigger_door_man"]:hover{
    animation: drag 2s infinite;
    transform-origin: center bottom;
    transform-box: fill-box;
  } */
</style>