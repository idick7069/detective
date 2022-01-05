<template>

    <img class="bg" style="width:100vw;height:100vh" :src="bg" />
    <div class="logout">
        <v-btn flat color="rgba(220, 220, 220, 0.8)" width="180" height="180">
            <v-img :src="logoutIcon" @click="leavePage()" position="0 0"></v-img>
        </v-btn>
    </div>
</template>

<script>
    import welcome from "../assets/welcome.png";
    import manualIcon from "../assets/icon/manual_icon.svg?url";
    import scaleIcon from "../assets/icon/scale_icon.svg?url";
    import logoutIcon from "../assets/icon/logout.png";
    import community from "../assets/temp_scene/community.png";
    import heart from "../assets/temp_scene/heart.png";
    import lobby from "../assets/temp_scene/lobby.png";
    import lung from "../assets/temp_scene/lung.png";
    import nerve from "../assets/temp_scene/nerve.png";
    import park from "../assets/temp_scene/park.png";
    import school from "../assets/temp_scene/school.png";
    import station from "../assets/temp_scene/station_bg.png";

    export default {
        name: "TempSence",
        data: () => ({
            width: "100vw",
            height: "1080",
            bg: welcome,
            logoutIcon
        }),
        mounted() {
            console.log(this.$route.params.id)
            switch (this.$route.params.id) {
                case 'community':
                    this.bg = community;
                    break;
                case 'heart':
                    this.bg = heart;
                    break;
                case 'lobby':
                    this.bg = lobby;
                    break;
                case 'lung':
                    this.bg = lung;
                    break;
                case 'nerve':
                    this.bg = nerve;
                    break;
                case 'park':
                    this.bg = park;
                    break;
                case 'school':
                    this.bg = school;
                    break;
                case 'station':
                    this.bg = station;
                    break;
            }
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
        methods: {
            leavePage() {
                this.$router.go(-1)
            },
        }
    };
</script>
<style scoped>
    .logout,
    .bg {
        position: absolute;
    }
</style>