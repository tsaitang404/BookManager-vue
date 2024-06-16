<template>
    <select-user />
    <select-book />
    <user-info v-if="su" />
    <book-info v-if="sb" />
    <div class="com2">
        <button @click="borrow">借书</button>
    </div>
</template>
<script>
import selectUser from "@/components/UI/userSelector.vue";
import userInfo from "../UI/userInfo.vue";
import selectBook from "@/components/UI/bookSelector.vue";
import bookInfo from "../UI/bookInfo.vue";
import Data from "@/datas/data.js"
export default {
    components: {
        selectUser,
        selectBook,
        userInfo,
        bookInfo
    },
    data() {
        return {
            su: false,
            sb: false,
            user: Data.isUser,
            book: Data.book,
            show: false
        }
    },
    methods: {
        async borrow() {
            // getList
            console.debug("UID:" + this.user.id + "&BookID:" + this.book.id)
            if (this.uid !== null && this.book !== null) {
                const checkdata = { id: this.book.id };
                const check = await this.axios.post("http://localhost:9090/api/isborrowed", checkdata);

                if (check.data == 1) {
                    const updatedata = { id: this.book.id, uid: this.user.id };
                    const update = await this.axios.post("http://localhost:9090/api/borrow", updatedata)
                    if (update.data == 1) {
                        alert("成功！");
                    } else alert("失败");
                }else{
                    alert("该书不再库内！");
                }


            } else {
                alert("请选择用户和图书！");
            }
        }
    }
}
</script>
<style scoped>
.com2 {
    display: flex;
    margin-top: 5%;
}

.com2 button {
    margin-left: 40px;
    margin-right: 40px;
}
</style>