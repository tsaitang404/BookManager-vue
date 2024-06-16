<template>
    <div class="topBar">
        <nav>
            <ul>
                <li><router-link to="/"><a href="#">主页</a></router-link></li>
                <li><router-link to="recently"><a href="#">最近添加</a></router-link></li>
                <li><router-link to="request"><a href="#" @click="personalView">请求新书</a></router-link></li>
                <li><router-link to="about"><a href="#" @click="contactView">联系我们</a></router-link></li>
            </ul>
        </nav>

    </div>
</template>

<script>
export default {
    data() {
        return {

        };
    },
    methods: {
    }
};
</script>

<style scoped>
.topBar {
    background-color: white;
    color: white;
    padding: 20px 0;
    position: absolute;
    z-index: 20;
    max-height: 30hv;
    top: 2px;
}

nav ul {
    list-style: none;
    padding: 2px;
    margin: 0;
    text-align: center;
    float: left;
    /* position: fixed; */
    top: 10px;
}

nav ul li {
    display: inline;
    margin-right: 1em;
}

nav ul li a {
    color: #fff;
    text-decoration: none;
    padding: 5px 5px;
    background-color: #007bff;
    border-radius: 5px;
}

nav ul li a:hover {
    background-color: #555;
}

@media (max-width: 600px) {
    nav ul li {
        display: block;
        margin-bottom: 1em;
        width: 4em;
    }

    nav ul li a {
        display: block;

    }
}
</style>