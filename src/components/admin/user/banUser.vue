<template>
    <div class="banUser">
        <select-user :modelValue="selectedUser" @update:modelValue="updateSelectedUser" />
        <button :style="{ backgroundColor: buttonColor, color: fontColor }" @click="confirmDelete">{{ buttonText
            }}</button>
    </div>
</template>

<script>
import SelectUser from "@/components/UI/userSelector.vue";
import Data from "@/datas/data.js";

export default {
    components: {
        SelectUser,
    },
    data() {
        return {
            user: Data.user,
            buttonColor: '#007bff',
            buttonText: "删除用户",
            fontColor: "white",
            doublecheck: false
        };
    },
    methods: {
        confirmDelete() {
            if (!this.doublecheck) {
                this.buttonColor = 'red';
                this.buttonText = "请确认！"
                this.fontColor = 'Black'

                this.doublecheck = true;
            } else {
                this.delUser()
            }
        },
        async delUser() {
            try {
                const data={id:this.user.id}
                const response =await  this.axios.post("http://localhost:9090/api/deluser", data);
                console.debug(data)
                console.debug(response.data)
                if (response.data > 0) {
                    alert("已经删除！")
                }
                else {
                    alset("出问题了！")
                }
            } catch (error) {

            }
        }
    }
}
</script>
<style scoped>
.banUser button {
    width: 90%;
}
</style>