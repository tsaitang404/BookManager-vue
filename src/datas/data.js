import { reactive } from 'vue';

/**
 * @typedef {Object} Book
 * @property {number} id
 * @property {string} name
 * @property {string} publisher
 * @property {string} author
 * @property {string} [cover]
 * @property {string} [preview]
 * @property {string} [description]
 * @property {string} [categories]
 * @property {number} [edition]
 * @property {number} [year]
 * @property {number} [pages]
 * @property {string} [isbn]
 * @property {string} [isbn13]
 * @property {boolean} [ban]
 */

/** @type {Book} */
const book = new reactive({  //  book模板
  id: 0,
  name: "Book Title",
  publisher: "Publisher Name",
  author: "Author Name",
  cover: "cover.jpg",
  preview: "preview.pdf",
  description: "Book Description",
  categories: "",
  edition: 1,
  year: 2024,
  pages: 300,
  isbn: "1234567890",
  isbn13: "123-1234567890",
  ban: false
});
/**
 * @typedef {Object} User
 * @property {number} id
 * @property {string} username
 * @property {string} password
 * @property {string} [description]
 * @property {string} [email]
 * @property {string} [avatar]
 * @property {string} [data]
 * @property {boolean} [ban]
 */
const user = new reactive({  //  user模板
  id: null,
  username: "神秘人",
  password: "",
  description: "猜猜我是谁",
  email: "",
  avatar: "https://pic.aketer.me//i/15de6ca5-7da7-4bba-a16f-fbfee30fbfed.jpg",
  data: "",
  ban: false
});

const isBook = new reactive({});
const isUser = new reactive({});
const Data = new reactive({
  isUser,  //  选中User
  isBook,   //    选中Book
  books: [],  //  缓存Book信息
  users: [],  //  缓存User信息
  book: {
    name: "99999",
    publisher: "",
    author: "",
    cover: "",
    preview: "",
    description: "",
    categories: "",
    edition: 1,
    year: 0,
    pages: 0,
    isbn: "",
    isbn13: "",
    ban: false
  },  //  定义Book类型
  user: {},  //  定义User类型
  data: {  //  user、book关系类型
    uid: null,
    book: [],
  },
  bookArray: []
});

export default Data;