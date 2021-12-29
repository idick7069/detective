<template>

    <!-- Provides the application the proper gutter -->
    <v-container>
        <div class="scene" v-html="house"></div>
    </v-container>

</template>


<script>
import house from '../assets/town_house.svg'
    export default ({
        name: 'Town',
         data: () => ({
           house
        }),
        // mounted() {
        //     var vobj = this
        //     $.get('../assets/town_house.svg', function (res) {
        //         vobj.scene_door = res
        //     }, 'text')
        // }
    })
</script>