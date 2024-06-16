<template>
    <select-book @choosedBook="choosed" />
    <button @click="submitChange">提交</button>
</template>
<script>
import selectBook from "@/components/UI/bookSelector.vue";
export default {
    props: {
        id: Number
    },

    data() {
        return {
            delBookId: 0

        }
    },
    components: {
        selectBook
    },
    methods: {
        choosed(id) {
            this.delBookId = id
        },
        async submitChange() {
            const data = { id: this.delBookId };
            try {
                const response = await this.axios.post('http://127.0.0.1:9090/api/delbook', data);
                console.debug(response.data)
                if (response.data > 0) {
                    alert("成功")
                } else {
                    alert("失败")
                }
            } catch (error) {
                alert(error);
            }
        }
    }
}
</script>
