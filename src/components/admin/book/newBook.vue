<!-- 添加/修改 组件 -->
<template>
    <div class="newBook">
        <div class="form-group">
            <label for="name">书名*:</label>
            <input type="text" id="name" v-model="book.name">
        </div>
        <div class="form-group">
            <label for="publisher">出版社*:</label>
            <input type="text" id="publisher" v-model="book.publisher">
        </div>

        <div class="form-group">
            <label for="author">作者*:</label>
            <input type="text" id="author" v-model="book.author">
        </div>
        <div class="form-group">
            <label for="cover">封面地址:</label>
            <input type="url" id="cover" v-model="book.cover">
        </div>
        <div class="form-group">
            <label for="preview">预览地址:</label>
            <input type="text" id="preview" v-model="book.preview">
        </div>
        <div class="form-group">
            <label for="description">描述:</label>
            <input type="text" id="description" v-model="book.description">
        </div>
        <div class="form-group">
            <label for="publisher">分类:</label>
            <input type="text" id="categories" v-model="book.categories">
        </div>
        <div class="form-group">
            <label for="edition">第几版:</label>
            <input type="number" id="edition" v-model="book.edition">
        </div>
        <div class="form-group">
            <label for="year">年份:</label>
            <input type="number" id="year" v-model="book.year">
        </div>
        <div class="form-group">
            <label for="pages">页数:</label>
            <input type="number" id="pages" v-model="book.pages">
        </div>
        <div class="form-group">
            <label for="isbn">isbn:</label>
            <input type="text" id="isbn" v-model="book.isbn">
        </div>
        <div class="form-group">
            <label for="isbn13">isbn13:</label>
            <input type="text" id="isbn13" v-model="book.isbn13">
        </div>
        <div class="form-group">

            <button style="width: 8em; margin: 4em;" @click="submitNewBook">添加</button>
        </div>
    </div>
</template>

<script>
import Data from "@/datas/data.js"
import modBook from "./modBook.vue";
export default {
    components: {
        modBook
    },
    data() {
        return {
            book: {
                name: "",
                publisher: "",
                author: "",
                cover: "",
                preview: "",
                description: "",
                categories: "",
                edition: 1,
                year: 0,
                pages: 0,
                isbn: "",
                isbn13: "",
                ban: false
            }
        }
    },
    methods: {
        async submitNewBook() {

            const data = this.book;
            console.debug(data);
            try {
                const response = await this.axios.post("http://localhost:9090/api/newbook", data);
                if (response.data != 0) {
                    alert("提交了");
                }

                else {
                    alert("呀 失败了");
                }
            } catch (error) {
                alert(error);
            }

        }
    },
    
}
</script>

<style scoped>
.form-group {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
}

.form-group label {
    width: 8em;
    align-content: start;
}

.newBook {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: -20px;
}

.newBook img {
    size: 200px;
}
</style>
