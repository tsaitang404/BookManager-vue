<template>
    <searchBar></searchBar>
    <exhibitionPanel style="margin-top: 10%;"></exhibitionPanel>
</template>
<script>
import exhibitionPanel from "@/components/UI/exhibition.vue"
import Data from "@/datas/data";
export default {
    components: {
        exhibitionPanel
    },
    data() {
        return {
            books: Data.books
        }
    },
    created() {
            this.getbook();
        
    },
    methods: {
        async getbook() {
            const data = { text: '' };
            try {
                const response = await this.axios.post("http://localhost:9090/api/searchbook", data);
                console.debug(response.data);
                if (response.data.length != 0) {
                    this.books.splice(0, this.books.length);
                    response.data.forEach(item => {

                        this.books.push(item);

                    });
                }
            } catch (error) {
                alert(error);
            }
        }
    }
}
</script>