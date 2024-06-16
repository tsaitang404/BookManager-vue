<template>
    <select-user/>
    <user-info/>
</template>
<script>
import selectUser from "@/components/UI/userSelector.vue";
import userInfo from "@/components/UI/userInfo.vue"
export default{
    components:{
        selectUser,
        userInfo
    }
}
</script>
