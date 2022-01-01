<template>
  <!-- Sizes your content based upon application components -->
  <v-main style="padding: 0px">
    <!-- Provides the application the proper gutter -->
    <v-container fluid >
      <!-- <v-img :src="welcome" class="my-3" contain height="200" /> -->
      <!-- If using vue-router -->
      <router-view></router-view>
      <div>
      <v-btn class="fixedContainer" color="pink" dark  bottom right >
         <v-dialog
        v-model="dialog"
        activator="parent"
      >
        <!-- <v-card>
          <v-card-text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </v-card-text>
          <v-card-actions>
            <v-btn color="primary" block @click="dialog = false">Close Dialog</v-btn>
          </v-card-actions>
        </v-card> -->
         <div class="book" v-html="book"  ></div>
        <div>

        </div>
      </v-dialog>
      </v-btn>
      </div>
    </v-container>
  </v-main>
</template>


<script>
// import welcome from '../assets/welcome.png'
import Book from '../components/Book.vue'
import book from "../assets/manual.svg?raw";
export default {
  name: "Container",
  data: () => ({
    dialog: false,
    Book,
    book
  })
};
</script>
<style scoped>
@media (min-width: 1920px) {
  .v-container {
    max-width: 1920px;
    padding: 0px;
  }
}
.fixedContainer {
  position: fixed; 
  transform: translate(-50px,-50px);
}
</style>