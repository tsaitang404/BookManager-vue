<template>
  <div class="bookCat" style="background-color: azure; padding: 2em;">
    <div v-for="(item, index) in books" :key="index" :to="{ name: 'details', params: { 'id': item.id } }"
      class="bookCatItem">
      <div style="display: flex; align-items: center;text-align: left;">
        <img :src="item.cover" alt="BookCover" class="bookCover" />
        <div style="margin-left: 20px; margin-right: 100px; align-items: start;">
          <p>ID：{{ item.id }}</p>
          <p>书名：{{ item.name }}</p>
          <p>作者：{{ item.author }}</p>
          <p>出版社：{{ item.publisher }} </p>
        </div>
      </div>
      <button style="margin-left: 60px; margin-top: 10px;right: 10px;width: 120px;"
        :style="{ backgroundColor: chooseBtn }" @click="choosed(index)">选择</button>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import Data from "@/datas/data.js"
export default {
  
  data() {
    return {
      books: Data.books,
      chooseBtn: "#007bff",
      choose: false,
      book: Data.book,
      id:null
    };
  },
  methods: {
    choosed(index) {
      if (this.choose == false) {
        console.debug(this.books[0])
        console.debug(index)
        Object.keys(this.books[index]).forEach(key => {
          this.book[key] = this.books[index][key];
        });
        this.id=this.books[0].id;
        this.book = this.books[index]
         this.$emit("submitBook",this.id);
        this.chooseBtn = "#808080";
        this.choose = true;
      } else {
        this.uid = null;
        this.chooseBtn = "#007bff"
        this.choose = false;
      }
    },
  }
};
</script>

<style>
.bookCat {
  display: flex;
  flex-direction: column;
}

.bookCatItem {
  margin-bottom: 20px;
  background-color: white;
  padding: 1em;
  border: 1px;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: inherit;
}

.bookCover {
  height: 180px;
  width: 120px;
  padding: 1em;
  border: solid 1px;
}
</style>
