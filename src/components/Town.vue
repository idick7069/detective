<template>

    <!-- Provides the application the proper gutter -->
    <v-container >
        <div class="scene" v-html="iconRaw"></div>
        
    </v-container>

</template>

<script>
import house from '../assets/town_house.svg'
import iconRaw from '../assets/town_house.svg?raw'
    export default ({
        name: 'Town',
         data: () => ({
          scene_door: '',
          iconRaw
        }),
        mounted() {
        
        }
    })
</script>
<style scoped>
 .scene{
     height: 100vh;
     widows: 100vw;
 }
</style>