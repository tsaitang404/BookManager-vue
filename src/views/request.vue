<template>
  <div class="new-book-form">
    <h2>请求新书</h2>
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="title">书名</label>
        <input type="text" id="title" v-model="book.title" required>
      </div>
      <div class="form-group">
        <label for="author">作者</label>
        <input type="text" id="author" v-model="book.author" required>
      </div>
      <div class="form-group">
        <label for="description">描述</label>
        <textarea id="description" v-model="book.description" required></textarea>
      </div>
      <button type="submit">提交请求</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      book: {
        title: '',
        author: '',
        description: ''
      }
    };
  },
  methods: {
    submitForm() {
      // 在这里处理表单提交逻辑，可以发送请求给服务器或者进行其他操作
      console.log('提交的书籍信息:', this.book);
      // 这里可以添加发送请求的逻辑
    }
  }
};
</script>

<style scoped>
.new-book-form {
  max-width: 400px;
  margin: 0 auto;
  padding: 40px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: azure;
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input,
textarea {
  width: 100%;
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

button {
  padding: 10px 20px;
  font-size: 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>
