<template>
    <!-- Sizes your content based upon application components -->
    
        <!-- Provides the application the proper gutter -->
      
            <v-img :width="width" :height="height" :src="welcome">
            </v-img>
            <!-- <div style="height:1080px width:1920">
                <v-img :src="welcome" />
            </div> -->
       
 
</template>


<script>
    import welcome from '../assets/welcome.png'
    export default ({
        name: 'Container',
        data: () => ({
            width: '100vw',
            height: '100vh',
            welcome,
        }),
    })
</script>