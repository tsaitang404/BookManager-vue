<template>
	<div class="login">
		<h2>登录</h2>
		<form @submit.prevent="login">
			<div class="form-group">
				<label for="username">用户名：</label>
				<input type="text" id="username" v-model="username" required>
			</div>
			<div class="form-group">
				<label for="password">密码：</label>
				<input type="password" id="password" v-model="password" required>
			</div>
			<p id="register" @click="register"
				style="text-decoration: underline; cursor:pointer; width: 150px;float: right; color: blue;">没有账号？点击注册
			</p>
			<button style="height: 40px;">登录</button>
		</form>
	</div>
</template>

<script>
import Data from "@/datas/data"
export default {
	data() {
		return {
			username: '',
			password: '',
			user: Data.user
		};
	},
	methods: {
		async login() {
			const data = {
				username: this.username,
				password: this.password,
			};

			try {
				const response = await this.axios.post("http://localhost:9090/api/login", data);
				console.debug(response.data);
				if (response.data.id !== undefined) {
					this.user.id = response.data.id;
					this.user.username = response.data.username;
					this.user.password = response.data.password;
					this.user.description = response.data.description;
					this.user.avatar = response.data.avatar;
					this.user.data = response.data.data;
					console.debug(this.user);
					this.$emit("login")
				} else {
					alert("用户名或密码错误，请重试！");
				}
			} catch (error) {
				alert(error);
			}
		},

		register() {
			this.$emit("showRegister");
			console.debug(" run showRegister")
		}
	},
	comments: {

	},
	props: {
		showRegister() {
			type: Object
		}
	}
};
</script>

<style scoped>
.login {
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