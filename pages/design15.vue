<template>
    <div class="container">
        <div class="nav">
            <img class="logo" src="/theWorldOfRH-Logo.svg" alt="The World Of RH Logo">
            <img class="search" src="/search-icon.png" alt="search icon">
            <img class="menu-icon" src="/menu-icon.png" alt="menu icon">
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
                <p class="link" id="places1" ref="places1" style="color: black"><a href="">GALLERIES</a></p>
                <p class="link" id="places2" ref="places2"><a href="">GUESTHOUSES</a></p>
                <p class="link" id="places3" ref="places3"><a href="">RESTAURANTS</a></p>
                <p class="link" id="places4" ref="places4"><a href="">RESIDENCES</a></p>
            </div>
            <div class="menu-2">
                <p class="the">The</p>
                <p class="titles">PRODUCTS</p>
                <p class="link" id="prod1" ref="prod1" style="color: black"><a href="">INTERIORS<span class="spacer">/</span></a><a href="">MODERN<span class="spacer">/</span></a><a href="">OUTDOOR</a></p>
                <p class="link" id="prod2" ref="prod2"><a href="">BEACH HOUSE<span class="spacer">/</span></a><a href="">SKI HOUSE<span class="spacer">/</span></a><a href="">COLOR</a></p>
                <p class="link" id="prod3" ref="prod3"><a href="">BABY<span class="spacer">/</span><a href="">CHILD</a><span class="spacer">/</span></a><a href="">TEEN</a></p>
                <p class="link" id="prod4" ref="prod4"><a href="">WATERWORKS BATH & KITCHEN</a></p>
            </div>
            <div class="menu-3">
                <p class="the">The</p>
                <p class="titles">SPACES <span class="and">&</span><span class="services"> SERVICES</span></p>
                <p class="link" id="spaces1" ref="spaces1" style="color: black"><a href="" id="spaces1" ref="spaces1">ARCHITECTURE</a></p>
                <p class="link" id="spaces2" ref="spaces2"><a href="">INTERIOR DESIGN</a></p>
                <p class="link" id="spaces3" ref="spaces3"><a href="">LANDSCAPE ARCHITECTURE</a></p>
                <p class="link" id="spaces4" ref="spaces4"><a href="">PLANE<span class="spacer">/</span>YATCH DESIGN & CHARTER</a></p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            i1: 2,
            i2: 2,
            i3: 2,
            startInterval1: null,
            interval1: null,
            startInterval2: null,
            interval2: null,
            startInterval3: null,
            interval3: null,
            i: 2,
            interval: null
        }
    },
    mounted() {
        // this.startInterval1 = setInterval(this.startPlaceSlideShow, 4000)
        // this.startInterval2 = setInterval(this.startProductSlideShow, 5000)
        // this.startInterval3 = setInterval(this.startSpaceSlideShow, 6000)
        this.interval = setInterval(this.slideshow, 4000)
    },
    methods: {
        startPlaceSlideShow() {
            clearInterval(this.startInterval1)
            this.$refs['places'+this.i1].style.color = 'black';
            this.$refs['places'+(this.i1-1)].style.color = '#999';
            this.$refs.col1.style.backgroundImage = 'url(\'/design11/11_bg_0'+this.i1+'.jpg\')';
            this.interval1 = setInterval(this.placeSlideShow, 4000)
        },
        placeSlideShow() {
            if (this.i1 == 1) {
                this.$refs['places'+this.i1].style.color = 'black';
                this.$refs['places'+'4'].style.color = '#999';
            } else {
                this.$refs['places'+this.i1].style.color = 'black';
                this.$refs['places'+(this.i1-1)].style.color = '#999';
            }
            this.$refs.col1.style.backgroundImage = 'url(\'/design11/11_bg_0'+this.i1+'.jpg\')';
            if (this.i1 == 4) {
                this.i1 = 1
            } else {
                this.i1++
            }
        },
        startProductSlideShow() {
            clearInterval(this.startInterval2)
            this.$refs['prod'+this.i2].style.color = 'black';
            this.$refs['prod'+(this.i2-1)].style.color = '#999';
            this.$refs.col2.style.backgroundImage = 'url(\'/design11/11_bg_0'+this.i2+'.jpg\')';
            this.interval2 = setInterval(this.prodSlideShow, 4000) 
        },
        prodSlideShow() {
            if (this.i2 == 1) {
                this.$refs['prod'+this.i2].style.color = 'black';
                this.$refs['prod'+'4'].style.color = '#999';
            } else {
                this.$refs['prod'+this.i2].style.color = 'black';
                this.$refs['prod'+(this.i2-1)].style.color = '#999';
            }
            this.$refs.col2.style.backgroundImage = 'url(\'/design11/11_bg_0'+this.i2+'.jpg\')';
            if (this.i2 == 4) {
                this.i2 = 1
            } else {
                this.i2++
            }
        },
        startSpaceSlideShow() {
            clearInterval(this.startInterval3)
            this.$refs['spaces'+this.i3].style.color = 'black';
            this.$refs['spaces'+(this.i3-1)].style.color = '#999';
            this.$refs.col3.style.backgroundImage = 'url(\'/design11/11_bg_0'+this.i3+'.jpg\')';
            this.interval3 = setInterval(this.spaceSlideShow, 4000) 
        },
        spaceSlideShow() {
            if (this.i3 == 1) {
                this.$refs['spaces'+this.i3].style.color = 'black';
                this.$refs['spaces'+'4'].style.color = '#999';
            } else {
                this.$refs['spaces'+this.i3].style.color = 'black';
                this.$refs['spaces'+(this.i3-1)].style.color = '#999';
            }
            this.$refs.col3.style.backgroundImage = 'url(\'/design11/11_bg_0'+this.i3+'.jpg\')';
            if (this.i3 == 4) {
                this.i3 = 1
            } else {
                this.i3++
            }
        },
        slideshow() {
            if (this.i == 1) {
                this.$refs['prod'+this.i].style.color = 'black';
                this.$refs['prod'+'4'].style.color = '#999';

                this.$refs['places'+this.i].style.color = 'black';
                this.$refs['places'+'4'].style.color = '#999';

                this.$refs['spaces'+this.i].style.color = 'black';
                this.$refs['spaces'+'4'].style.color = '#999';
            } else {
                this.$refs['prod'+this.i].style.color = 'black';
                this.$refs['prod'+(this.i-1)].style.color = '#999';

                this.$refs['places'+this.i].style.color = 'black';
                this.$refs['places'+(this.i-1)].style.color = '#999';
            
                this.$refs['spaces'+this.i].style.color = 'black';
                this.$refs['spaces'+(this.i-1)].style.color = '#999';
            }
            this.$refs.col1.style.backgroundImage = 'url(\'/design11/11_bg_0'+this.i+'.jpg\')';
            this.$refs.col2.style.backgroundImage = 'url(\'/design11/11_bg_0'+this.i+'.jpg\')';
            this.$refs.col3.style.backgroundImage = 'url(\'/design11/11_bg_0'+this.i+'.jpg\')';
            if (this.i == 4) {
                this.i = 1
            } else {
                this.i++
            }
        }
            // if (this.j == 1) {
            //     this.$refs['prod'+this.j].style.color = 'black';
            //     this.$refs['prod'+'4'].style.color = '#999';

            //     this.$refs['places'+this.j].style.color = 'black';
            //     this.$refs['places'+'4'].style.color = '#999';

            //     this.$refs['spaces'+this.j].style.color = 'black';
            //     this.$refs['spaces'+'4'].style.color = '#999';
            // } else {
            //     this.$refs['prod'+this.j].style.color = 'black';
            //     this.$refs['prod'+(this.j-1)].style.color = '#999';

            //     this.$refs['places'+this.j].style.color = 'black';
            //     this.$refs['places'+(this.j-1)].style.color = '#999';
            
            //     this.$refs['spaces'+this.j].style.color = 'black';
            //     this.$refs['spaces'+(this.j-1)].style.color = '#999';
            // }
            // this.$refs.col1.style.backgroundImage = 'url(\'/design11/11_bg_0'+this.i+'.jpg\')';
            // this.$refs.col2.style.backgroundImage = 'url(\'/design11/11_bg_0'+this.i+'.jpg\')';
            // this.$refs.col3.style.backgroundImage = 'url(\'/design11/11_bg_0'+this.i+'.jpg\')';
            // if (this.j == 4) {
            //     this.j = 1
            // } else {
            //     this.j++
            // }
            // if (this.i == 9) {
            //     this.i = 1
            // } else {
            //     this.i++
            // }
    }
}
</script>

<style>
.container {
    /* height: 732px; */
    animation: fadeIn 1s ease-in;
    padding: 0px 3.5%;
}

.nav {
    height: 109.8px;
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
    height: 465.8px;
}

.col-1, .col-2, .col-3 {
    width: 33.33vw;
    background-size: cover;
    background-position: center;
    transition: all 1000ms ease-in;
}

.col-2, .menu-2 {
    margin: 0 1.5%;
}

.the {
    color: black;
    font-family: 'CaslonRH-ThinItalic', sans-serif;
    font-size: 11.5pt;
    line-height: 7.305pt;
    letter-spacing: .01em;
}

.titles {
    color: black;
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
    height: 156.4px;
}

.menu-1, .menu-2, .menu-3 {
    width: 33.33vw;
    /* color: #999 */
}

.link {
    color: #999;
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
    background-image: url('/design15/15_bg_places_01.jpg');
    /* background-position: left; */
}

.col-2 {
    background-image: url('/design15/15_bg_products_01.jpg');
    /* background-position: center; */
}

.col-3 {
    background-image: url('/design15/15_bg_spaces_01.jpg');
    /* background-position: right; */
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
