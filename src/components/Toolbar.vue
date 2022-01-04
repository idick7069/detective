<template>
  <div id="toolbar">
    <v-layout style="overflow: hidden">
      <v-app-bar app color="transparent" border="false" height="180">
        <!-- <v-app-bar-nav-icon @click="drawer = !drawer" style="background-color:'tansparent'">
             <v-icon>mdi-menu</v-icon>
      </v-app-bar-nav-icon> -->
        <v-btn flat color="transparent" width="180" height="180">
          <v-img :src="IconComponent" @click="drawer = !drawer" position="0 0"></v-img>
          <!-- <IconComponent  @click="drawer = !drawer" position="0 0"/> -->
        </v-btn>



      </v-app-bar>
      <v-navigation-drawer v-model="drawer" color="#9FE8FF" width="640">
        <v-list nav dense>
          <v-list-item v-for="item in items" :key="item.title" color="#FFFFFF" class="tile" height="125px"
            density="comfortable" v-on:click="loadPage(item.url)">
            <!-- <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon> -->

            <v-list-item-content height="125px">
              <!-- <v-list-item-title> -->
              <h1 class="toolbar_item_text">{{ item.title }}</h1>
              <!-- </v-list-item-title> -->
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
  import IconComponent from '../assets/menu.svg?url'
  export default {
    data: () => ({
      drawer: false,
      group: null,
      IconComponent,
      items: [{
          title: '何謂身心症',
          icon: 'mdi-view-dashboard',
          url: 'Town'
        },
        {
          title: '身心症狀報你知',
          icon: 'mdi-account-box',
          url: 'Welcome'
        },
        {
          title: '自我檢測量表',
          icon: 'mdi-gavel',
          url: 'Scale'
        },
        {
          title: '療癒舒緩看這邊',
          icon: 'mdi-gavel',
          url: 'HelloWorld'
        },
        {
          title: '身心症懶人包',
          icon: 'mdi-gavel',
          url: '/'
        },
        {
          title: '相關影片',
          icon: 'mdi-gavel',
          url: '/'
        },
        {
          title: '關於我們',
          icon: 'mdi-gavel',
          url: '/'
        },
      ],
    }),
    methods: {
      loadPage(name) {
        // alert(name)
        this.drawer = false;
        if (name == "Scale") {
          this.$store.commit("setDialogOpen", true);
        } else {
          this.$router.push({
            name: name
          })
        }
      }
    }
  }
</script>

<style scoped>
  /* .tile:hover {
    background: #67C2EF80;
  } */

  .tile {
    background: #67C2EF;
  }

  .v-list {
    padding: 0px;
  }

  .v-list-item {
    /* justify-content: center; */
    /* text-align: center; */
    align-content: center;
    display: grid;
    margin: 1px;
  }

  .toolbar_item_text {
    font-size: 48px;
  }
</style>