<template>
    <div  class="userCat">

        <el-avatar :src="avatar" alt="User Avatar" :size="80" class="avatar" />
        <div class="userDetails">
            <h2>UID: {{ id }}</h2>
            <h2>用户名: {{ username }}</h2>
        </div>
        <slot class="selectButton" />
    </div>
</template>

<script>
import Data from '@/datas/data.js';

export default {
   
    data() {
        return {
            user: Data.user,
        };
    },
    computed: {
        id() { return this.user.id },
        avatar() { return this.user.avatar; },
        username() { return this.user.username }
    }
}




</script>

<style scoped>
.userCat {
    background-color: azure;
    display: flex;
    align-items: center;
    padding: 20px;
}

.avatar {
    margin-right: 20px;
    flex-shrink: 0;
    margin-left: 10px;
}

.userDetails {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-left: 40px;
    margin-right: 100px;
}



.userDetails h2 {
    text-align: left;
    width: 100%;
    /* Adjusted width to fill the available space */
    margin: 5px 0;
}
</style>
