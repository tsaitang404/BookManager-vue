<template>
    <div class="book-details">
        <div class="cover">
            <img :src="book.cover" :alt="book.name" />

        </div>
        <div style="margin-left: 30px; width: 70%; text-align: start; display: flex;flex-direction: column;">

            <div class="info">
                <h3>{{ book.name }}</h3>
                <p>作者: {{ book.author }}</p>
                <p>出版社: {{ book.publisher }}</p>
                <p>年份: {{ book.year }}</p>

                <p>版本：第{{ book.edition }}版</p>
                <p>语言：{{ book.language }}</p>
                <p>页数：{{ book.pages }}</p>
                <p>isbn10：{{ book.isbn10 }}</p>
                <p>isbn13：{{ book.isbn13 }}</p>
                <slot />
            </div>
        </div>
    </div>
</template>
<script>
import Data from "@/datas/data.js"
export default {
    data() {
        return {
            shit: false,
            book: Data.book
        }
    },
    methods: {
        async getDetail(id) {
            const data = { id: id };
            try {
                const response = await this.axios.post("http://localhost:9090/api/detail", data);
                console.debug(response.data);
                if (response.data.length != 0) {
                    console.debug(response.data);
                    this.book = response.data;
                }
            } catch (error) {
                alert(error);
            }
        }
    },
    created() {
        this.getDetail(this.$route.params.id)
    }
}
</script>

<style scoped>
.book-details {
    display: flex;
    background-color: azure;
}

.cover {
    margin: 20px;
    padding: 20px;
    min-width: 30%;

}

.cover img {
    max-width: 240px;
    /* 根据需要调整封面图片的大小 */
}

@media (max-width: 600px) {
    .book-details {
        display: flex;
        flex-direction: column;
        background-color: azure;
    }
}
</style>