<template>
<div id="toolbar">
   <v-layout style="overflow: hidden">
   <v-app-bar app color="transparent" border="false" height="180">
      <!-- <v-app-bar-nav-icon @click="drawer = !drawer" style="background-color:'tansparent'">
             <v-icon>mdi-menu</v-icon>
      </v-app-bar-nav-icon> -->
      <v-btn
      flat
      color ="transparent"
    >
       <v-img :src="logo" width="180" height="500" @click="drawer = !drawer" position="0 0"></v-img>
    </v-btn>
    
     
     
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      color ="#9FE8FF"
      rail-width = "640"
    >
      <v-list
        nav
        dense
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          color = "#FFFFFF"
          class="tile"
          height="125px"
          density="comfortable"
          v-on:click="loadPage(item.url)"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content >
            <v-list-item-title >{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <!-- <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item prepend-icon="mdi-home" title="Home" v-on:click="loadPage('HelloWorld')"/>

          <v-list-item prepend-icon="mdi-account" title="Account" v-on:click="loadPage('Welcome')">
         
          </v-list-item>
        </v-list-item-group> -->
      </v-list>
    </v-navigation-drawer>
    <!-- <v-main style="padding:0px">
      <v-card
        height="400"
         color="#385F73"
      ></v-card> 
    </v-main> -->
  </v-layout>
</div>
</template>

<script>
import logo from '../assets/logo.png'
  export default {
    data: () => ({
      drawer: false,
      group: null,
      logo,
       items: [
          { title: 'HelloWorld', icon: 'mdi-view-dashboard' ,url:'HelloWorld'},
          { title: 'Welcome', icon: 'mdi-account-box' ,url:'Welcome'},
          { title: 'Town', icon: 'mdi-gavel', url:'Town' },
        ],
    }),
    methods:{
      loadPage(name){
        // alert(name)
        this.$router.push({ name: name })
      }
    }
  }
</script>

<style scoped>
  .tile:hover {
    background: #67C2EF80;
  }
  .tile{
    background: #67C2EF;
  }
</style>