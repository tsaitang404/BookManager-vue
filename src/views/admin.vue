<template>
    <div v-if="user.id == 1 || true" style="display: flex; padding-top: -20px;">

        <el-row class="tac">
            <el-col :span="12">
                <h2 class="mb-2">后台管理</h2>
                <el-menu default-active="1" class="el-menu-vertical-demo">
                    <el-sub-menu index="1">
                        <template #title>
                            <span>借阅管理</span>
                        </template>
                        <el-menu-item index="1-1" @click="toBorrow">借书</el-menu-item>
                        <el-menu-item index="1-2" @click="toReturn">还书</el-menu-item>
                    </el-sub-menu>
                    <el-sub-menu index="2">
                        <template #title>
                            <span>图书管理</span>
                        </template>
                        <el-menu-item index="2-1" @click="toNewBook">新增书籍</el-menu-item>
                        <el-menu-item index="2-2" @click="toModBook">修改书籍</el-menu-item>
                        <el-menu-item index="2-3" @click="toBanBook">封存书籍</el-menu-item>
                    </el-sub-menu>
                    <el-sub-menu index="3">
                        <template #title>
                            <span>用户管理</span>
                        </template>
                        <el-menu-item index="3-1" @click="toNewUser">新增用户</el-menu-item>
                        <el-menu-item index="3-2" @click="toModUser">修改用户</el-menu-item>
                        <el-menu-item index="3-3" @click="toBanUser">封存用户</el-menu-item>
                        <el-menu-item index="3-4" @click="toUserGroup">用户组</el-menu-item>
                    </el-sub-menu>
                    <el-sub-menu index="4">
                        <template #title>
                            <span>系统设置</span>
                        </template>
                        <el-menu-item index="4-1" @click="toSettings">页面设置</el-menu-item>
                        <el-menu-item index="4-2" @click="toSettings">接口设置</el-menu-item>
                        <el-menu-item index="4-3" @click="toSettings">其他</el-menu-item>
                    </el-sub-menu>
                </el-menu>
            </el-col>
        </el-row>
        <div class="view">
            <component :is="view"></component>
        </div>
    </div>
    <div v-else>
        <h2>你需要管理员登录，点击右上角登录</h2>
    </div>
</template>
<script>
import borrowBook from "@/components/admin/borrow.vue"
import returnBook from "@/components/admin/return.vue"
import newBook from '@/components/admin/book/newBook.vue'
import modBook from '@/components/admin/book/modBook.vue'
import banBook from '@/components/admin/book/delBook.vue'
import newUser from '@/components/admin/user/newUser.vue'
import modUser from '@/components/admin/user/modUser.vue'
import banUser from '@/components/admin/user/banUser.vue'
import userGroup from '@/components/admin/user/userGroup.vue'
import unfinished from "./unfinished.vue"

import Data from "@/datas/data.js"




export default {
    components: {
        newBook,
        modBook,
        banBook,
        newUser,
        modUser,
        banUser,
        borrowBook,
        returnBook,
        userGroup
    },
    data() {
        return {
            view: borrowBook,
            user: Data.user,
            isUser: Data.isUser,
            books: Data.books

        }
    },
    methods: {
        clean() {
            //this.books = [];
            for (let key in this.user) {
                delete this.user[key]; // 清空对象
            }
            this.books.splice(0, this.books.length); // 清空数组
        },
        
        toBorrow() {
            this.clean();
            this.view = borrowBook
        },
        toReturn() {
            this.clean();
            this.view = returnBook
        },
        toNewUser() {
            this.clean();
            this.view = newUser
        },
        toModUser() {
            this.clean();
            this.view = modUser
        },
        toBanUser() {
            this.clean();
            this.view = banUser
        },
        toUserGroup() {
            this.clean();
            this.view = unfinished
        },
        toNewBook() {
            this.clean();
            this.view = newBook
        },
        toModBook() {
            this.clean();
            this.view = modBook
        },
        toBanBook() {
            this.clean();
            this.view = banBook
        },
        toSettings() {
            this.clean();
            this.view = unfinished
        }
    },
    created(){
            this.clean = this.clean.bind(this);
    }
}
</script>

<style scoped>
.tac {
    width: 30%;
    background-color: white;
}

.view {
    width: 90%;
    margin-top: 60px;
}
</style>