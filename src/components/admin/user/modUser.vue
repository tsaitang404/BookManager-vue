<template>
    <select-user />
    <div class="moduser">
        <div class="form-group">
            <label for="username">用户名*:</label>
            <input type="text" id="username" v-model="user.username">
        </div>
        <div class="form-group">
            <label for="password">密码*:</label>
            <input type="password" id="password" v-model="user.password">
        </div>
        <div class="form-group">
            <label for="email">E-mail:</label>
            <input type="email" id="email" v-model="user.email">
        </div>
        <div class="form-group">
            <label for="description">描述:</label>
            <input type="text" id="description" v-model="user.description">
        </div>
        <div class="form-group">
            <label for="avatar">头像地址:</label>
            <input type="url" id="avatar" v-model="user.avatar">
        </div>
        <div class="form-group">

            <button @click="submitChange">提交修改</button>
        </div>
    </div>
</template>
<script>
import selectUser from "@/components/UI/userSelector.vue";
import Data from "@/datas/data";
export default {
    components: {
        selectUser,
    },
    data() {
        return {
            user: Data.user
        }
    },
    methods: {
        async submitChange() {
            try {
                const response = await this.axios.post("http://localhost:9090/api/moduser", Data.user)
                if (response.data > 0) {
                    alert("提交成功！")
                } else {
                    alert("出问题了")
                }
            }catch(error){
                alert(error)
            }
    }
}

}
</script>
