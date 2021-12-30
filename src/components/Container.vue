<template>
    <!-- Sizes your content based upon application components -->
    <v-main style="padding:0px" >

        <!-- Provides the application the proper gutter -->
        <v-container fluid >
            <!-- <v-img :src="welcome" class="my-3" contain height="200" /> -->
            <!-- If using vue-router -->
            <router-view></router-view>
        </v-container>
    </v-main>
</template>


<script>
    // import welcome from '../assets/welcome.png'
    export default ({
        name: 'Container'
    })
</script>
<style scoped>
    @media (min-width:1920px) {
        .v-container {
            max-width: 1920px;
            padding: 0px;
        }
    }
</style>