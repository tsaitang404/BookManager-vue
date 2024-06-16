<template>
    <div class="com1">
        <input type="text" v-model="sBookName">
        <button @click="searchBtn">检索书籍</button>
    </div>
    <component :is="showbook" @submitBook="choosed">

    </component>
</template>


<script>
import Data from "@/datas/data.js"
import bookCat from './bookCat.vue'
export default {
    props: {
        id: Number
    },
    components: {
        bookCat,
    },

    data() {
        return {
            sBookName: null,
            books: Data.books,
            showbook: ''

        }
    },
    methods: {
        choosed(id) {
            console.debug(id)
             this.$emit("submitBook", id);
             this.$emit("choosedBook",id);
        },
        async searchBtn() {
            if (this.sBookName == null || this.sBookName == null) {
                alert("请输入书名！")
                return;
            }
            const data = { text: this.sBookName.toString() };
            console.debug(data);
            try {
                const response = await this.axios.post("http://localhost:9090/api/searchbook", data);
                if (response.data.length != 0) {
                    response.data.forEach(item => {
                        this.books.splice(0, this.books.length);
                        this.books.push(item);
                    });
                    this.showbook = bookCat;
                } else {
                    alert("妹有啊！");
                }
            } catch (error) {
                alert(error);
            }
        }
    }
}
</script>
<style scoped>
.com1 {
    display: flex;
    margin: 10px;
}

.com1 input {
    width: 80%;
}

.com1 button {
    width: 20%;
}
</style>