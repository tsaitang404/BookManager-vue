<template>
    <searchBar></searchBar>
    <exhibition style="margin-top: 10%;"></exhibition>
</template>
<script>
import exhibition from "@/components/UI/exhibition.vue"
import searchBar from "@/components/UI/searchBar.vue"
import Data from "@/datas/data";
import searchBarVue from '@/components/UI/searchBar.vue';
export default {
    components: {
        exhibition,
        searchBar
    },
    data() {
        return {
            books: Data.books
        }
    },
}
</script>