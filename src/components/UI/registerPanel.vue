<template>
  <div class="register">
    <h2>注册</h2>
    <form @submit.prevent="register">
      <div class="form-group">
        <label for="username">用户名：</label>
        <input type="text" id="username" v-model="username" required>
      </div>
      <div class="form-group">
        <label for="password">密码：</label>
        <input type="password" id="password" v-model="password" required>
        <label for="password">重复密码：</label>
        <input type="password" id="password" v-model="password" required>
      </div>
      <div class="form-group">
        <label for="email">邮箱：</label>
        <input type="email" id="email" v-model="email" required>
      </div>
      <button>注册</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
      description: '',
      email: '',
      avatar: '',


    };
  },
  methods: {

    async register() {
      const user = { id: null, username: this.username, password: this.password, description: this.description, email: this.email, avatar: this.avatar,data:null,ban:false };
      try {
        const response = await this.axios.post("http://localhost:9090/api/register", user)
        console.debug(response.data)
        if (response.data=null) {
          alert("注册成功！请重新登陆！")
          this.$emit("showLogin");
        } else alert("用户名重复，请重试。")

      } catch (error) {
        alert(error);
      }
    }
  }
};
</script>

<style>
.register {
  position: absolute;
  z-index: 10;
  right: 0%;
  max-width: 300px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  float: right;
  background-color: #fff;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
}

button {
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>