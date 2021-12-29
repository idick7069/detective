<template>
  <div>
    <Toolbar/>
    <Container/>
  </div>
</template>

<script>
import HelloWorld from '../components/HelloWorld.vue';
import Toolbar from '../components/Toolbar.vue'
import Container from '../components/Container.vue'
import Welcome from '../components/Welcome.vue'
export default {
  name: 'Home',
  
  components: {
    Toolbar,
    HelloWorld,
    Container,
    Welcome
  },
};
</script>
