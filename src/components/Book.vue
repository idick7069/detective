<template>
    <div class="book" v-html="book" ></div>
</template>

<script>
import book from "../assets/manual.svg?raw";
export default {
  name: "book",
  data: () => ({
    book,
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