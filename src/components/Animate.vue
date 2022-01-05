<template>
    <div>
        <vue3VideoPlay class="player" v-bind="options" />
    </div>
</template>

<script>
    import {
        reactive
    } from "vue";
    import posterSrc from '../assets/welcome.png';
    import animationSrc from '../assets/video/homepage_animation.mp4';
    export default {
        name: "Container",
        data: () => ({
            width: "100vw",
            height: "56.25vw",
            options: reactive({
                width: "100vw",
                height: "56.25vw",
                color: "#409eff",
                currentTime: 60,
                autoPlay: true,
                volume: 0.3,
                speed: false,
                title: "",
                muted: false,
                control: false,
                loop: true,
                src: animationSrc,
                poster: posterSrc
            })
        }),
        mounted() {

        }
    };
</script>
