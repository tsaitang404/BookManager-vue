<template>
  <div class="gallery" style="background-color: azure;padding: 2em;;">
    <div v-for="(item, index) in books" :key="index" class="gallery-item">
      <router-link :to="{ name: 'details', params: { 'id': item.id } }">

        <img :src="item.cover" alt="BookCover" class="bookCover" />
        <div class="bookName">{{ item.name }}</div>
        <slot/>
      </router-link>
    </div>
  </div>
</template>
<script>
import Data from "@/datas/data.js"
export default {
  data() {
    return {
      books: Data.books
    };
  },
  methods: {
    details(item) {
      console.log(item.name);
      this.$router.push({ name: 'details', params: { id: index } });

    },
    preview() { }
  }
};
</script>

<style>
.gallery {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 20px;

}

.gallery-item {
  flex: 0 0 10%;
  /* 设置每个项目的宽度，可以根据需要调整 */
  margin-bottom: 20px;
  background-color: white;
  padding: 1em;
  border: 1px;
}

.bookCover {
  height: 120px;
  width: 80px;
  padding: 1em;
  border: solid 1px;
}

.bookName {
  margin-top: 10px;
  font-size: small;
}
</style>
