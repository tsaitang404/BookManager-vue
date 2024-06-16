<template>

	<div id="main" @click="closePanel">
		<header>
			<!-- 顶栏 -->
			<topBar />
			<!--登陆按钮  -->
			<button id="login" v-if="!isLogin" @click="showLogin()" @click.stop="stopPop"
				style="position: absolute;right:10px;z-index: 20; width:60px; margin-top:5px ;padding: 10px;background-color: #007bff;color: #fff;border: none;border-radius: 5px;cursor: pointer;">
				{{ loginBtnMsg }}</button>
			<!-- 头像 -->
			<el-avatar id="avatar" v-else v-show="!showPanel" :src="user.avatar" :size="50" alt="User Avatar"
				@click="showUser()" @click.stop="stopPop" />
			<!-- 边栏 -->
			<div v-show="showPanel" id="aside" @click.stop="stopPop"
				style="position:absolute; z-index:2;width: 20%; right: 10px;height: auto;">
				<keep-alive>

					<component :is="panel" @showRegister="showRegister" @login="login" @register="register"
						@logout="logout">
						<button v-if="isAdmin" @click="toAdmin">管理入口</button>
					</component>
				</keep-alive>
			</div>
		</header>
		<div id="context" style="z-index: 0;float:left; text-align: center;min-height: 60vh;margin: 10%;">
			<router-view />


		</div>
		<footer>
			<footerBar />
			<!-- Debug -->
			<button @click="debugP">Debug: 输出Data</button>
			<!-- Debug -->
		</footer>
	</div>
</template>

<script>
import loginPanel from "./components/UI/loginPanel.vue";
import topBar from "./components/UI/topBar.vue";
import searchBar from "./components/UI/searchBar.vue"
import footerBar from "./components/UI/footerBar.vue"
import registerPanel from "./components/UI/registerPanel.vue"
import userPanel from "@/components/UI/userPanel.vue"
import Data from "@/datas/data.js"

export default {
	components: {
		topBar,
		loginPanel,
		searchBar,
		footerBar,
		registerPanel,
		userPanel
	},
	data() {
		return {
			user: Data.user,
			isLogin: false,
			isAdmin: false,
			search: "", // 检索内容
			loginBtnMsg: "登录",
			showPanel: false,
			panel: loginPanel,
		}
	},

	methods: {
		showLogin() {
			this.panel = loginPanel;
			this.showPanel = this.showPanel ? false : true;
			this.loginBtnMsg = this.loginBtnMsg === "登录" ? "就不" : "登录";
		},
		showRegister() {
			this.panel = registerPanel;
			console.debug("show Register")
		},
		showUser() {
			this.panel = userPanel;
			this.showPanel = true;
			console.debug(this.bookshelf)

		},
		closePanel(event) {
			if (this.showPanel == true) this.showPanel = false;
			this.loginBtnMsg = "登录";
		},
		stopPop(e) {
			e.stopPropagation();
		},
		login() {
			if (this.user.username == "admin") this.isAdmin = true;
			this.isLogin = true;
			this.panel = userPanel;
		},
		register() {
			alert("注册成功，请重新登录！");
			this.showLogin();
		},
		logout() {
			this.isAdmin = false;
			this.isLogin = false;
			this.closePanel();
		},
		toAdmin() {
			this.$router.push("/admin");
			this.closePanel();
		},
		debugP(){
			console.error(Data);
		}
	},
	mounted() {
		document.addEventListener('click', this.closePanel);
	}
}
</script>
<style scoped>
#main {

	display: flex;
	flex-direction: column;
	min-height: 100vh;
	/* 设置最小高度为视口高度，确保页脚始终位于页面底部 */
	margin: 0;

}


#avatar {
	position: absolute;
	right: 10px;
	top: 5px;
}
</style>