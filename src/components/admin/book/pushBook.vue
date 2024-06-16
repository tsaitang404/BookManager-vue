<script>
export default {
    setup() {
        
    },
    methods:{
        async push() {

            const book = {
                id: null,
                name: this.book.name.toString(),
                publish: this.book.publisher.toString(),
                author: this.book.author.toString(),
                cover: this.book.data.cover.toString(),
                preview: this.book.data.preview.toString(),
                description: null.toString(),
                edition: this.book.data.edition,
                year: this.book.data.year,
                pages: this.book.data.pages,
                isbn: this.book.data.isbn,
                isbn13: this.book.data.isbn13
            };
            try {
                console.log(typeof(book.author))
                const response = await this.axios.post("http://localhost:9090/api/newbook", book);
                console.debug(response.data);
                if (response.data !== null && response.data !== undefined) {
                   console.debug(response.data)
                } else {
                    alert("用户名或密码错误，请重试！");
                }
            } catch (error) {
                alert(error);
            }
        }
    }
}
</script>