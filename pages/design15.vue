<template>
    <div class="container">
        <div class="nav">
            <img class="logo" src="/theWorldOfRH-Logo.svg" alt="The World Of RH Logo">
            <img class="search" src="search-icon.png" alt="search icon">
            <img class="menu-icon" src="menu-icon.png" alt="menu icon">
        </div>
        <div class="slideshow">
            <div class="col-1" id="col1" ref="col1"></div>
            <div class="col-2" id="col2" ref="col2"></div>
            <div class="col-3" id="col3" ref="col3"></div>
        </div>
        <div class="menu">
            <div class="menu-1">
                <p class="the">The</p>
                <p class="titles">PLACES</p>
                <a href="" id="places1" ref="places1">GALLERIES</a><br>
                <a href="" id="places2" ref="places2">GUESTHOUSES</a><br>
                <a href="" id="places3" ref="places3">RESTAURANTS</a><br>
                <a href="">RESIDENCES</a>
            </div>
            <div class="menu-2">
                <p class="the">The</p>
                <p class="titles">PRODUCTS</p>
                <a href="" id="prod1" ref="prod1">INTERIORS<span class="spacer">/</span></a><a href="">MODERN<span class="spacer">/</span></a><a href="">OUTDOOR</a><br>
                <a href="" id="prod2" ref="prod2">BEACH HOUSE<span class="spacer">/</span></a><a href="">SKI HOUSE<span class="spacer">/</span></a><a href="">COLOR</a><br>
                <a href="" id="prod3" ref="prod3">BABY<span class="spacer">/</span><a href="">CHILD</a><span class="spacer">/</span></a><a href="">TEEN</a><br>
                <a href="">WATERWORKS BATH & KITCHEN</a>
            </div>
            <div class="menu-3">
                <p class="the">The</p>
                <p class="titles">SPACES <span class="and">&</span><span class="services"> SERVICES</span></p>
                <a href="" id="spaces1" ref="spaces1">ARCHITECTURE</a><br>
                <a href="" id="spaces3" ref="spaces3">INTERIOR DESIGN</a><br>
                <a href="" id="spaces2" ref="spaces2">LANDSCAPE ARCHITECTURE</a><br>
                <a href="">PLANE & YATCH DESIGN & CHARTER</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            i: 2,
            j: 2,
            interval: null
        }
    },
    mounted() {
        this.interval = setInterval(this.slideshow, 4000)
    },
    methods: {
        slideshow() {
            // if (this.j == 1) {
            //     this.$refs['prod'+this.j].style.color = '#fff';
            //     this.$refs['prod'+'3'].style.color = '#ccc';

            //     this.$refs['places'+this.j].style.color = '#fff';
            //     this.$refs['places'+'3'].style.color = '#ccc';

            //     this.$refs['spaces'+this.j].style.color = '#fff';
            //     this.$refs['spaces'+'3'].style.color = '#ccc';
            // } else {
            //     this.$refs['prod'+this.j].style.color = '#fff';
            //     this.$refs['prod'+(this.j-1)].style.color = '#ccc';

            //     this.$refs['places'+this.j].style.color = '#fff';
            //     this.$refs['places'+(this.j-1)].style.color = '#ccc';
            
            //     this.$refs['spaces'+this.j].style.color = '#fff';
            //     this.$refs['spaces'+(this.j-1)].style.color = '#ccc';
            // }
            this.$refs.col1.style.backgroundImage = 'url(\'/design11/11_bg_0'+this.i+'.jpg\')';
            this.$refs.col2.style.backgroundImage = 'url(\'/design11/11_bg_0'+this.i+'.jpg\')';
            this.$refs.col3.style.backgroundImage = 'url(\'/design11/11_bg_0'+this.i+'.jpg\')';
            if (this.j == 3) {
                this.j = 1
            } else {
                this.j++
            }
            if (this.i == 9) {
                this.i = 1
            } else {
                this.i++
            }
        }
    }
}
</script>

<style>
.container {
    height: 100vh;
    /* background-color: black; */
    color: black;
    animation: fadeIn 1s ease-in;
    padding: 0px 3.5%;
}

.nav {
    height: 15vh;
    display: flex;
    justify-content: center;
}

.logo {
    width: 80px;
    margin: 15px auto;
    position: absolute;
    left: 0;
    right: 0;
}

.search {
    width: 15px;
    height: 15px;
    position: absolute;
    right: 75px;
    top: 25px;
}

.menu-icon {
    width: 15px;
    height: 15px;
    position: absolute;
    right: 36px;
    top: 25px;
}

.slideshow {
    display: flex;
    height: 65vh;
}

.col-1, .col-2, .col-3 {
    width: 33.33vw;
    background-size: cover;
    transition: all 750ms ease-in;
}

.col-2, .menu-2 {
    margin: 0 1.5%;
}

.the {
    font-family: 'CaslonRH-ThinItalic', sans-serif;
    font-size: 11.5pt;
    line-height: 7.305pt;
    letter-spacing: .01em;
}

.titles {
    /* color: white; */
    font-family: 'CaslonRH-Superfine', sans-serif;
    font-size: 21.5pt;
    line-height: 18.025pt;
    letter-spacing: .02em;
    padding-bottom: 15px;
}

.and, .services {
    font-size: 13.5pt;
    line-height: 11pt;
}

.services {
    font-family: 'CaslonRH-SuperfineItalic';
}

.menu {
    /* text-align: center; */
    display: flex;
    align-items: center;
    height: 20vh;
}

.menu-1, .menu-2, .menu-3 {
    width: 33.33vw;
    /* color: #ccc */
}

.menu a {
    font-family: 'BaronSans-Thin';
    font-size: 7.5pt;
    line-height: 7.5pt;
    letter-spacing: .07em;
    transition: all 400ms ease-in;
}

.spacer {
    padding: 0 5px;
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
