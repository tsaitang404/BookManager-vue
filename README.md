# 这是BookManager的前端项目
# 数据结构
user
```
  id: null,  // UID
  username: "神秘人",  //  用户名 唯一值
  password: "",     // 密码
  description: "猜猜我是谁",       // 描述
  email: "", // 邮箱
  avatar: "https://pic.aketer.me//i/15de6ca5-7da7-4bba-a16f-fbfee30fbfed.jpg",  // 头像地址
  data: "",    
  ban: false  // 是否禁止登陆
```

book

```
  id: 0,  // 书id
  name: "Book Title", // 书名
  publisher: "Publisher Name", // 出版社
  author: "Author Name",  // 作者
  cover: "cover.jpg",  //  封面地址
  preview: "preview.pdf",  // 预览地址  我用的pdf.js
  description: "Book Description",  //  描述 一般写副标题
  categories: "",  //  分类
  edition: 1,  //  版本
  year: 2024,  //  年份
  pages: 300,  //  页数
  isbn: "1234567890",  // isbn
  isbn13: "123-1234567890",  //  isbn13
  ban: false  //  是否可以被看到

```
# 接口定义
