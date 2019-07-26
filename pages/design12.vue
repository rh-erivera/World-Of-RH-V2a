<template>
    <div class="container">
        <div class="hero">
            <img class="logo" src="/RH-logo.svg" alt="">
            <div class="quote">
                <p class="RH-Caslon">“Rather than looking to the past, we believe in destroying today’s reality to create tomorrow’s future. Only by taking risks can we explore our unlimited potential.”</p>
                <p class="Baron-Sans">—Gary Friedman</p>
            </div>
            <video poster="/design11/11319617-hd.png" autoplay muted loop>
                <source src="/Waves_1500x974_1.mp4" type="video/mp4">
            </video>
        </div> 
        <div class="grid">
            <div class="bg-container" @mouseenter="reveal1" @mouseleave="hide1">
                <div id="bg1" ref="bg1" class="bg bg-1"></div>
                <p id="bg1Title" ref="bg1Title">COLLECTIONS</p>
            </div>
            <div class="bg-container" @mouseenter="reveal2" @mouseleave="hide2">
                <div id="bg2" ref="bg2" class="bg bg-2"></div>
                <p id="bg2Title" ref="bg2Title">SOURCE BOOKS</p>
            </div>
            <div class="bg-container" @mouseenter="reveal3" @mouseleave="hide3">
                <div id="bg3" ref="bg3" class="bg bg-3"></div>
                <p id="bg3Title" ref="bg3Title">GALLERIES</p>
            </div>
            <div class="bg-container" @mouseenter="reveal4" @mouseleave="hide4">
                <div id="bg4" ref="bg4" class="bg bg-4"></div>
                <p id="bg4Title" ref="bg4Title">RESIDENCES</p>
            </div>
            <div class="bg-container" @mouseenter="reveal5" @mouseleave="hide5">
                <div id="bg5" ref="bg5" class="bg bg-5"></div>
                <p id="bg5Title" ref="bg5Title">GUEST HOUSES</p>
            </div>
            <div class="bg-container" @mouseenter="reveal6" @mouseleave="hide6">
                <div id="bg6" ref="bg6" class="bg bg-6"></div>
                <p id="bg6Title" ref="bg6Title">RESTAURANTS</p>
            </div>
            <div class="bg-container" @mouseenter="reveal7" @mouseleave="hide7">
                <div id="bg7" ref="bg7" class="bg bg-8"></div>
                <p id="bg7Title" ref="bg7Title">PLANES</p>
            </div>
            <div class="bg-container" @mouseenter="reveal8" @mouseleave="hide8">
                <div id="bg8" ref="bg8" class="bg bg-7"></div>
                <p id="bg8Title" ref="bg8Title">YATCHS</p>
            </div>
            <div class="bg-container" @mouseenter="reveal9" @mouseleave="hide9">
                <div id="bg9" ref="bg9" class="bg bg-9"></div>
                <p id="bg9Title" ref="bg9Title">DESIGN SERVICES</p>
            </div>
        </div>
    </div>
</template>


<script>


export default {
    methods: {
        reveal1() {
            this.$refs.bg1.style.opacity = 1;
            this.$refs.bg1Title.style.opacity = 0;
        },
        hide1() {
            this.$refs.bg1.style.opacity = .6;
            this.$refs.bg1Title.style.opacity = 1;
        },
        reveal2() {
            this.$refs.bg2.style.opacity = 1;
            this.$refs.bg2Title.style.opacity = 0;
        },
        hide2() {
            this.$refs.bg2.style.opacity = .6;
            this.$refs.bg2Title.style.opacity = 1;
        },
        reveal3() {
            this.$refs.bg3.style.opacity = 1;
            this.$refs.bg3Title.style.opacity = 0;
        },
        hide3() {
            this.$refs.bg3.style.opacity = .6;
            this.$refs.bg3Title.style.opacity = 1;
        },
        reveal4() {
            this.$refs.bg4.style.opacity = 1;
            this.$refs.bg4Title.style.opacity = 0;
        },
        hide4() {
            this.$refs.bg4.style.opacity = .6;
            this.$refs.bg4Title.style.opacity = 1;
        },
        reveal5() {
            this.$refs.bg5.style.opacity = 1;
            this.$refs.bg5Title.style.opacity = 0;
        },
        hide5() {
            this.$refs.bg5.style.opacity = .6;
            this.$refs.bg5Title.style.opacity = 1;
        },
        reveal6() {
            this.$refs.bg6.style.opacity = 1;
            this.$refs.bg6Title.style.opacity = 0;
        },
        hide6() {
            this.$refs.bg6.style.opacity = .6;
            this.$refs.bg6Title.style.opacity = 1;
        },
        reveal7() {
            this.$refs.bg7.style.opacity = 1;
            this.$refs.bg7Title.style.opacity = 0;
        },
        hide7() {
            this.$refs.bg7.style.opacity = .6;
            this.$refs.bg7Title.style.opacity = 1;
        },
        reveal8() {
            this.$refs.bg8.style.opacity = 1;
            this.$refs.bg8Title.style.opacity = 0;
        },
        hide8() {
            this.$refs.bg8.style.opacity = .6;
            this.$refs.bg8Title.style.opacity = 1;
        },
        reveal9() {
            this.$refs.bg9.style.opacity = 1;
            this.$refs.bg9Title.style.opacity = 0;
        },
        hide9() {
            this.$refs.bg9.style.opacity = .6;
            this.$refs.bg9Title.style.opacity = 1;
        },
    }

}
</script>


<style>

.logo {
    position: absolute;
    left: 0;
    right: 0;
    margin: 0 auto;
    width: 75px;
    z-index: 1;
    bottom: 25px;
}

.hero {
    /* background-color: black;
    opacity: .8; */
    display: flex;
    align-items: center;
    height: 100vh;
    animation: fadeIn 1s ease-in;
    color: white;
    /* margin-bottom: 30px; */
    overflow: hidden;
}

.hero video {
    /* position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100%; */
    width: 100vw;
}

video[poster]{
   object-fit: cover;
}

.quote {
    position: absolute;
    z-index: 1;
    padding: 0 130px;
    margin-top: 25px;
}

.RH-Caslon {
    font-family: 'CaslonRH-Superfine', sans-serif;
    font-size: 27.5pt;
    line-height: 22.5pt;
    letter-spacing: .02em;
    text-transform: uppercase;
    text-align: center;
}
.Baron-Sans {
    font-family: 'BaronSans-Thin', sans-serif;
    font-size: 10pt;
    line-height: 23pt;
    letter-spacing: .05em;
    text-transform: uppercase;
    text-align: right;
    padding-top: 10px;
}

.grid {
    display: flex;
    flex-wrap: wrap;
    padding: 2.5%;
}

.grid div {
    width: 30.5vw;
    height: 30.5vw;
    margin: .55%;
}

.bg {
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 85vh;
    width: 100%;
    opacity: .6;
    transition: opacity 300ms ease-in;
}

.bg-container {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
}

.bg-container p {
    color: #333;
    font-family: 'BaronSans-Thin';
    font-size: 20pt;
    line-height: 12pt;
    letter-spacing: .1em;
    position: absolute;
    transition: opacity 300ms ease-in;
}

.bg-1 {
    background-image: url('/design12/12_bg_01.jpg');
}

.bg-2 {
    background-image: url('/design12/12_bg_02.jpg');
}

.bg-3 {
    background-image: url('/design12/12_bg_03.jpg');
}

.bg-4 {
    background-image: url('/design12/12_bg_04.jpg');
}

.bg-5 {
    background-image: url('/design12/12_bg_05.jpg');
}

.bg-6 {
    background-image: url('/design12/12_bg_06.jpg');
}

.bg-7 {
    background-image: url('/design12/12_bg_07.jpg');
}

.bg-8 {
    background-image: url('/design12/12_bg_08.jpg');
}

.bg-9 {
    background-image: url('/design12/12_bg_09.jpg');
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
