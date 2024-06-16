<template>
    <div class="newuser">
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

            <button @click="register">添加</button>
        </div>
    </div>
</template>

<script>
import Data from "@/datas/data.js"

export default {
    components: {},
    data() {
        return {
            user: Data.user
        }
    },
    methods: {
        async register() {
            const data = this.user;
            try {
                const response = await this.axios.post("http://localhost:9090/api/register", data)
                if (response.data.id !== 0) {
                    alert("注册成功！")
                } else alert("用户名重复，请重试。")

            } catch (error) {
                alert(error);
            }
        }
    }
}
</script>

<style scoped>
.form-group {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
}

.form-group label {
    width: 8em;
    align-content: start;
}

.form-group button {
    width: 8em;
    margin: 4em;
}

.newuser {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 80px;
}

.newuser img {
    size: 200px;
}
</style>
