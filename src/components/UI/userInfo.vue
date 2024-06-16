<template>
<div id="userInfo">
    <!-- <img :src="userData.data.avatar"/> -->
    <a>ID：{{ user.id}}</a>
    <a>用户名：{{ user.username}}</a>
    <a>E-mail：{{ user.email}}</a>

</div>

</template>
<script>
import Data from "@/datas/data.js"
export default {
    data(){
        return{
            user:Data.isUser
        }
    }
}
</script>