<template>
    <div id="userPanel">

        <div id="user" style=" display: grid; place-items: center; ">
            <el-avatar :src="user.avatar" alt="User Avatar" :size="70"
                style="justify-content: center; z-index: 55;" />

            <h2>{{ user.username }}</h2>
            <a style="padding-top: 10px;padding-bottom: 10px;">{{ user.description }}</a>

            <slot />
            <button>修改信息</button>
            <button @click="logout">退出登陆</button>
        </div>
    </div>
</template>
<script>
import Data from '@/datas/data';
export default {
    data() {
        return {
            user:Data.user
        }
    },
    methods: {
        logout() {
            this.$emit("logout");
        }
    }
}
</script>
<style scoped>
#user {
    right: 0%;
    max-width: 200px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    float: right;
    background-color: azure;
}

button {
    margin-top: 20px;
}
</style>