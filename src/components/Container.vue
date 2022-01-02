<template>
    <!-- Sizes your content based upon application components -->
    <v-main style="padding: 0px">
        <!-- Provides the application the proper gutter -->
        <v-container fluid>
            <router-view></router-view>
            <div>
                <v-btn class="fixedContainer" color="pink" dark bottom right>
                    <v-dialog v-model="dialog" activator="parent" fullscreen>
                        <div>

                            <div class="manual_item_1" v-html="manual_item_1"></div>
                            <div class="book" v-html="book"></div>
                        </div>
                    </v-dialog>
                </v-btn>
            </div>

        </v-container>
    </v-main>
</template>


<script>
    // import welcome from '../assets/welcome.png'

    import book from "../assets/manual.svg?raw";
    import manual_item_1 from "../assets/manual_item_1.svg?raw"
    export default {
        name: "Container",
        data: () => ({
            dialog: false,
            book,
            manual_item_1
        }),
        mounted() {

        }
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

    /* .manual_item_1 {
        height: 100vh;
        widows: 100vw;
        position: absolute;
    } */
</style>
<style>
    [data-name="red_tag"] {
        pointer-events: auto;
    }
</style>