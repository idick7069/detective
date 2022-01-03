<template>
    <!-- Sizes your content based upon application components -->
    <v-main style="padding: 0px">
        <!-- Provides the application the proper gutter -->
        <v-container fluid>
            <router-view></router-view>
            <div>
                <v-btn class="fixedContainer" dark bottom right height="100" width="100" color="red" 
                    variant="default">
                    <div v-html="inputValue"></div>
                    <v-dialog v-model="dialog" activator="parent" fullscreen>
                        <div class="book" v-html="book"></div>
                        <!-- <v-img  class="manual_item_1" :src="manual_item_1"></v-img> -->
                        <div class="manual_item_1" v-html="manual_item_1"></div>
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
    import scale_icon from "../assets/icon/scale_icon.svg?url"
    export default {
        name: "Container",
        data: () => ({
            dialog: false,
            book,
            manual_item_1,
            inputValue: '<img width="100" height="100" src="' + scale_icon + '"></img>'
        }),
        created() {
            this.$store.commit('setFloatingTemplate', '<v-img src="' + scale_icon + '"></v-img>');
            console.log(this.$store.state.floatingTemplate)
        },
        mounted() {
            this.inputValue = this.$store.state.floatingTemplate;
        },
        methods: {
            say: function (message) {
                alert(message)
            }
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

    .book {
        position: absolute;
    }

    .manual_item_1 {
        pointer-events: none;
        position: absolute;
    }
</style>
<style>
    [data-name="red_tag"] {
        pointer-events: auto;
    }
</style>