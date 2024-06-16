<template>
<div id="userInfo">
    <!-- <img :src="userData.data.avatar"/> -->
    <a>ID：{{ userData.id}}</a>
    <a>用户名：{{ userData.username}}</a>
    <a>E-mail：{{ userData.email}}</a>

</div>

</template>
<script>
import Data from "@/datas/data.js"
export default {
    data(){
        return{
            userData:Data.userData
        }
    }
}
</script>