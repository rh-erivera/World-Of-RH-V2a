<template>
    <div class="container">
        <img class="logo" src="/theWorldOfRH-Logo-White.svg" alt="">
        <div class="col-1-container">
            <div id="products" ref="products" class="col-1" @mouseenter="showProducts" @mouseleave="reset"></div>
            <p class="titles col-1-title">PRODUCTS</p>
            <div id="col1Menu" ref="col1Menu" class="menu">
                <a href="">COLLECTIONS<span style="padding: 0 10px;">|</span></a>
                <a href="">SOURCE BOOKS<span style="padding: 0 10px;">|</span></a>
                <a href="">GALLERIES</a>
            </div>
        </div>
        <div class="col-2-container">
            <div id="places" ref="places" class="col-2" @mouseenter="showPlaces" @mouseleave="reset"></div>
            <p class="titles col-2-title">PLACES</p>
            <div id="col2Menu" ref="col2Menu" class="menu">
                <a href="">GALLERIES<span style="padding: 0 10px;">|</span></a>
                <a href="">RESTAURANTS<span style="padding: 0 10px;">|</span></a>
                <a href="">RESIDENCES</a>
            </div>
        </div>
        <div class="col-3-container">
            <div id="spaces" ref="spaces" class="col-3" @mouseenter="showSpaces" @mouseleave="reset"></div>
            <p class="titles col-3-title">SPACES</p>
            <div id="col3Menu" ref="col3Menu" class="menu">
                <a href="">GUEST HOUSES<span style="padding: 0 10px;">|</span></a>
                <a href="">PLANES<span style="padding: 0 10px;">|</span></a>
                <a href="">YATCHS</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        showProducts() {
            this.$refs.products.style.width = '60vw'
            this.$refs.places.style.width = '20vw'
            this.$refs.spaces.style.width = '20vw'
            this.$refs.products.style.opacity = 1
            this.$refs.col1Menu.style.opacity = 1
        },
        showPlaces() {
            this.$refs.products.style.width = '20vw'
            this.$refs.places.style.width = '60vw'
            this.$refs.spaces.style.width = '20vw'
            this.$refs.places.style.opacity = 1
            this.$refs.col2Menu.style.opacity = 1
        },
        showSpaces() {
            this.$refs.products.style.width = '20vw'
            this.$refs.places.style.width = '20vw'
            this.$refs.spaces.style.width = '60vw'
            this.$refs.spaces.style.opacity = 1
            this.$refs.col3Menu.style.opacity = 1
        },
        reset() {
            this.$refs.products.style.width = '33.33vw'
            this.$refs.places.style.width = '33.33vw'
            this.$refs.spaces.style.width = '33.33vw'
            this.$refs.products.style.opacity = .4
            this.$refs.places.style.opacity = .4
            this.$refs.spaces.style.opacity = .4
            this.$refs.col1Menu.style.opacity = 0
            this.$refs.col2Menu.style.opacity = 0
            this.$refs.col3Menu.style.opacity = 0
        }
    }
}
</script>

<style>
.container {
    height: 100vh;
    display: flex;
    background-color: black;
    color: white;
    animation: fadeIn 1s ease-in;
}

.logo {
    width: 100px;
    position: absolute;
    margin: 0 auto;
    left: 0;
    right: 0;
    top: 25px;
    z-index: 1;
}

.col-1-container, .col-2-container, .col-3-container {
    display: flex;
    justify-content: center;
    position: relative;
}

.col-1, .col-2, .col-3 {
    width: 33.33vw;
    background-size: cover;
    opacity: .4;
    transition: width 400ms ease-in, opacity 400ms ease-in;
}

.titles {
    font-family: 'CaslonRH-Thin', sans-serif;
    font-size: 24pt;
    line-height: 24pt;
    letter-spacing: .04em;
}

.menu {
    position: absolute;
    bottom: 25px;
    text-align: center;
    opacity: 0;
    transition: opacity 400ms ease-in;
}

.menu a {
    font-family: 'BaronSans-Thin';
    font-size: 9pt;
    line-height: 14.4pt;
    letter-spacing: .1em;
}

.col-1-title, .col-2-title, .col-3-title {
    position: absolute;
    bottom: 100px;
    transition: opacity 400ms ease-in;
}

.col-1 {
    background-image: url('/design10/10_bg_01.jpg');
    background-position: left;
}

.col-2 {
    background-image: url('/design10/10_bg_02.jpg');
    background-position: center;
}

.col-3 {
    background-image: url('/design10/10_bg_03.jpg');
    background-position: right;
}

@keyframes fadeIn {
    0% {opacity: 0;}
    100% {opacity: 1;}
}
@-webkit-keyframes fadeIn {
    0% {opacity: 0;}
    100% {opacity: 1;}    
}
</style>
