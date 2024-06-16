<template>
    <div style="position: absolute; right: 10%; top:-36px;">

        <searchBar />
    </div>
    <bookInfo :id="id">


        <div class="actions" style="display: flex;">
            <button style="width: 90%;" @click="preview">预览</button>
            <span style="width: 10%;margin-left: 20px;font-size:xx-large;">👍</span>
        </div>
    </bookInfo>
    <twikoo-comment-vue />
</template>


<script>
import bookInfo from "@/components/UI/bookInfo.vue"
import searchBar from "@/components/UI/searchBar.vue";
import TwikooCommentVue from '@/components/TwikooComment.vue';
import Data from "@/datas/data.js"
export default {
    components: {
        searchBar,
        TwikooCommentVue,
        bookInfo
    },
    props: {
        id: {
            type:Number,
            required: true
        }
    },
    data() {
        return {

            book: Data.books[this.$route.params.id - 1]
        }
    },
    methods: {
        preview() {
            window.open(this.book.preview, '_blank');
        }
    }

};
</script>




