<template>
  <div id="toolbar">
    <v-layout style="overflow: hidden">
      <v-app-bar app color="transparent" border="false" height="180" style="pointer-events: none;">
        <v-btn flat color="transparent" width="180" height="180" style="pointer-events: auto;">
          <v-img :src="IconComponent" @click="drawer = !drawer" position="0 0"></v-img>
        </v-btn>
      </v-app-bar>
      <v-navigation-drawer v-model="drawer" color="#9FE8FF" width="640">
        <v-list nav dense>
          <v-list-item v-for="item in items" :key="item.title" color="#FFFFFF" class="tile" height="125px"
            density="comfortable" v-on:click="loadPage(item.url)">
            <v-list-item-content height="125px">
              <!-- <v-list-item-title> -->
              <h1 class="toolbar_item_text">{{ item.title }}</h1>
              <!-- </v-list-item-title> -->
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
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
          url: ''
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
          url: ''
        },
        {
          title: '身心症懶人包',
          icon: 'mdi-gavel',
          url: ''
        },
        {
          title: '相關影片',
          icon: 'mdi-gavel',
          url: ''
        },
        {
          title: '關於我們',
          icon: 'mdi-gavel',
          url: ''
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
  .tile {
    background: #67C2EF;
  }

  .v-list {
    padding: 0px;
  }

  .v-list-item {
    align-content: center;
    display: grid;
    margin: 1px;
  }

  .toolbar_item_text {
    font-size: 48px;
  }
</style>