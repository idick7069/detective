<template>
     <v-container>
    
    <div class="scaleBackground" v-html="scaleBackground"></div> 
        
         <div class="content">123</div>
  </v-container>
</template>

<script>
import scaleBackground from "../assets/scale_form.svg?raw";
export default {
  name: "Town",
  data: () => ({
    scaleBackground,
  }),
  mounted() {
    console.log(scaleBackground)
  },
};
</script>
<style scoped>
.scaleBackground{
   height: 100vh;
  widows: 100vw;
  position: absolute;
}
.content{
    width: 300px;
  position: relative;
  top: 350px;
  left: 100px;
  background: cornsilk;
}
</style>