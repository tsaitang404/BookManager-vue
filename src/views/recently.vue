<template>
    <searchBar></searchBar>
    <exhibitionPanel style="margin-top: 10%;"></exhibitionPanel>
</template>
<script>
import exhibitionPanel from "@/components/UI/exhibition.vue"
import Data from "@/datas/data";
export default{
    components:{
        exhibitionPanel
    },
    data(){
        return{
            books:Data.books
        }
    },
    created(){
        this.getbook();
    },
    methods:{
        async getbook() {
            try {
                const response = await this.axios.post("http://localhost:9090/api/lastitems");
                console.debug(response.data);
                if (response.data.length != 0) {
                    console.debug(response.data);
                    this.books.splice(0, this.books.length);
                    response.data.forEach(item => {

                        this.books.push(item);

                    });
                    console.debug(this.books[0]);
                } 
            } catch (error) {
                alert(error);
            }
        }
    }
}
</script>