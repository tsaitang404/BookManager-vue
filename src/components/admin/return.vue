<template>
    <select-user @updatabooks="updatabooks" />
    <user-info v-if="su" />
    <book-info v-if="sb" />
    <div class="com2">
    </div>
    <book-cat v-show="show" :key="key" @submitBook="submitBook"></book-cat>
    <button v-show="show" @click="returnBook"> 一键还书 </button>
</template>
<script>
import selectUser from "@/components/UI/userSelector.vue";
import userInfo from "../UI/userInfo.vue";
import selectBook from "@/components/UI/bookSelector.vue";
import bookInfo from "../UI/bookInfo.vue";
import Data from "@/datas/data";
import bookCat from '../UI/bookCat.vue';
export default {
    props: {
        id: Number
    },
    components: {
        selectUser,
        selectBook,
        userInfo,
        bookInfo,
        bookCat
    },
    data() {
        return {
            su: false,
            sb: false,
            user: Data.isUser,
            books: Data.books,
            key: 0,
            show: false,
            returnBookArray: []
        }
    },
    methods: {
        async updatabooks() {
            console.debug(this.user)
            const data = { id: this.user.id };
            try {
                const response = await this.axios.post("http://localhost:9090/api/bbooks", data);
                console.debug(response.data);
                this.books.splice(0, this.books.length);
                if (response.data.length != 0) {
                    response.data.forEach(item => {
                        this.books.push(item);
                        console.debug(item)
                    });
                }

            } catch (error) {
                console.error(error)
            }
        },
        returnBook() {
            console.debug(this.returnBookArray);

            this.returnBookArray.forEach(async item => {

                const response = await this.axios.post("http://localhost:9090/api/borrow", { id: item, uid: 0 });
                console.debug(response.data)
                if (response.data == 0) {
                    alert("出问题了")
                } else {
                    alert("还书成功！")
                }
            });
            this.updatabooks();
        },
        submitBook(id) {
            console.debug(id)
            this.returnBookArray.push(id)
        }
    },
    // created() {
    //     this.user = {};
    //     this.books = [];
    // },
    computed: {
        show() {
            if (this.books.length == 0) return false;
            else return true;
        }
    }
}
</script>
<style scoped>
.com2 {
    display: flex;
}

.com2 button {
    margin-left: 40px;
    margin-right: 40px;
}
</style>