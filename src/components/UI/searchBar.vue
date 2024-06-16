<template>
    <div id="searchBar" style="display: inline-flex; margin-top: 50px; width: 60%;">

        <input type="text" v-model="search" @keyup.enter="searchBtn" style="width: 300%;">
        <button @click="searchBtn" style="width: 200px;background-color: #007bff;">搜索</button>

    </div>
</template>
<script>
import Data from "@/datas/data.js"


export default {
    data() {
        return {
            search: "",
            books: Data.books
        }
    },
    methods: {
        async searchBtn() {
            const data = { text: this.search.toString() };
            console.debug(data);
            try {
                const response = await this.axios.post("http://localhost:9090/api/searchbook", data);
                if (response.data.length != 0) {
                    response.data.forEach(item => {
                        this.books.splice(0, this.books.length);

                        this.books.push(item);

                    });
                    this.$router.push("/result");
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