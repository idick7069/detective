<template>
  <div>
    <Toolbar/>
    <HelloWorld/>
  </div>
</template>

<script>
import HelloWorld from '../components/HelloWorld.vue';
import Toolbar from '../components/Toolbar.vue'
export default {
  name: 'Home',
  
  components: {
    Toolbar,
    HelloWorld,
  },
};
</script>
