<template>
    <div class="book" v-html="book" ></div>
    <div v-html="manual_item_1"></div>
</template>

<script>
import book from "../assets/manual.svg?raw";
import manual_item_1 from "../assets/manual_item_1.svg?raw"
export default {
  name: "book",
  data: () => ({
    book,
    manual_item_1
  }),
  mounted() {
    console.log(book);
  },
};
</script>
<style scoped>
    .book{
        width: 500px;
        height: 500px;
    }
</style>