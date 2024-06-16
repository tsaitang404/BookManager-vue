<template>
    <bookSelector v-show="showWitch" @chooseBook="chooseBook" />
    <div v-if="!showWitch">
        <div class="modBook" >
            <div>

            </div>
            <div class="form-group">
                <label for="name">书名*:</label><input type="text" id="name"  v-model="book.name">
            </div>
            <div class="form-group">
                <label for="publisher">出版社*:</label>
                <input type="text" id="publisher" v-model="book.publisher" >
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

                <button  @click="submitModBook">提交修改</button>
            </div>
        </div>
    </div>
</template>
<script>
import bookSelector from "@/components/UI/bookSelector.vue";
import Data from "@/datas/data.js"
export default {
    props: {
        id: Number
    },
    components: {
        bookSelector,

    },
    data() {
        return {
            componentA: bookSelector,
            showWitch: true,
            book: Data.book,


        }
    },
    methods: {

        chooseBook(id) {
            console.debug(id)
            this.showWitch = false;
            this.getDetail(id)
        },
        async getDetail(id) {
            const data = { id: id };
            try {
                const response = await this.axios.post("http://localhost:9090/api/detail", data);
                // console.debug(response.data);
                if (response.data.length != 0) {
                    // console.debug(response.data);
                    Object.keys(response.data).forEach(key => {
                        this.book[key] = response.data[key];
                    });
                    // console.debug(this.book);
                }
            } catch (error) {
                alert(error);
            }
        },
        async submitModBook(){
             const data = this.book;
            try {
                const response = await this.axios.post("http://localhost:9090/api/modbook", data);
                console.debug(response.data);
                if (response.data > 0) {
                    alert("修改成功");
                }else{
                    alert("出问题了");
                }
            } catch (error) {
                alert(error);
            }
        }
    },
    watch:{
        book(){}
    }

}
</script>
<style scoped>
.form-group{
    display: flex;
    align-items: center;
    margin-top: 20px;
}
.form-group input{
    width: 80%;
}
.form-group label{
    width: 20%;
}
.form-group bottom{
    width: 100%;
    margin: 2em;
}
</style>
