<template>
    <div class="newuser">
        <div class="form-group">
            <label for="username">用户名:</label>
            <input type="text" id="username" :v-model="username">
        </div>
        <div class="form-group">
            <label for="password">密码:</label>
            <input type="password" id="password" :v-model="password">
        </div>
        <div class="form-group">
            <label for="email">E-mail:</label>
            <input type="email" id="email" :v-model="email">
        </div>
        <div class="form-group">
            <label for="description">描述:</label>
            <input type="text" id="description" :v-model="description">
        </div>
        <div class="form-group">
            <label for="avatar">头像地址:</label>
            <input type="url" id="avatar" :v-model="avatar">
        </div>
        <div class="form-group">

            <button style="width: 8em; margin: 4em;">添加</button>
        </div>
    </div>
</template>

<script>
import Data from "@/datas/data.js"

export default {
    components: {},
    data() {
        return {
            id: Data.userData.id,
            username: "",
            password: "",
            email: "",
            avatar: "",
            description: ""
        }
    },
    watch: {
        avatar() { }
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
