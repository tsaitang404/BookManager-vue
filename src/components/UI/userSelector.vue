<template>
    <div class="userSelector">
        <input v-model="sUserName">
        <button @click="searchUser">检索用户</button>
    </div>
    <div>
        <userCat v-show="isNull" class="userCat">
            <button :style="{ backgroundColor: chooseBtn }" id="choose" @click="choosed">选择</button>
        </userCat>
    </div>
</template>
<script>
import userCat from './userCat.vue'
import Data from '@/datas/data.js'
export default {
    setup() {

    },
    components: {
        userCat
    },
    data() {
        return {
            sUserName: "",
            user: Data.user,
            isNull: false,
            uid: Data.data.uid,
            chooseBtn: "#007bff",
            choose: false
        }
    },
    methods: {
        choosed() {
            if (this.choose == false) {
                this.chooseBtn = "#808080";
                this.choose = true;
                this.$emit("updatabooks")
                this.$emit("chooseUser")

            } else {
                this.uid = null;
                this.chooseBtn = "#007bff"
                this.choose = false;
            }
        },
        async searchUser() {
            if (this.sUserName == null || this.sUserName == null) {
                alert("请输入用户名！")
                return;
            }
            this.chooseBtn = "#007bff";
            this.choose = false;
            const data = { text: this.sUserName.toString() };
            try {
                const response = await this.axios.post("http://localhost:9090/api/findbyname", data);
                console.debug(response.data);
                if (response.data.length != 0) {
                    Object.keys(response.data).forEach(key => {
                        this.user[key] = response.data[key];
                    });
                } else {
                    alert("妹有啊！");
                }
            } catch (error) {
                alert(error);
            }
        }
    },
    computed: {
        isNull() {
            return (Object.keys(this.user).length === 0) ? false : true
        }
    }
}
</script>
<style scoped>
.userSelector {

    margin: 10px;
    justify-content: space-between;
}

.userSelector input {
    width: 80%;
}

.userSelector button {
    width: 20%;
}

#choose {
    width: 200px;
    margin-left: 100px;
}
</style>