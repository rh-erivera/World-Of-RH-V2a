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
            <v-touch v-for="(item, i) in gridItems" :key="i" v-on:tap="reveal(i+1)" class="bg-container">
                <div :id="'bg'+(i+1)" :ref="'bg'+(i+1)" :class="'bg bg-'+(i+1)"></div>
                <p :id="'bg'+(i+1)+'Title'" :ref="'bg'+(i+1)+'Title'">{{item}}</p>
            </v-touch>
        </div>
    </div>
</template>


<script>


export default {
    data () {
        return {
            gridItems: [
                'COLLECTIONS',
                'SOURCE BOOKS',
                'GALLERIES',
                'RESIDENCES',
                'GUEST HOUSES',
                'RESTAURANTS',
                'YATCHS',
                'PLANES',
                'DESIGN SERVICES'
            ]
        }
    },
    methods: {
        reveal(i) {
            this.$refs.bg1[0].style.opacity = .6;
            this.$refs.bg1Title[0].style.opacity = 1;
            this.$refs.bg2[0].style.opacity = .6;
            this.$refs.bg2Title[0].style.opacity = 1;
            this.$refs.bg3[0].style.opacity = .6;
            this.$refs.bg3Title[0].style.opacity = 1;
            this.$refs.bg4[0].style.opacity = .6;
            this.$refs.bg4Title[0].style.opacity = 1;
            this.$refs.bg5[0].style.opacity = .6;
            this.$refs.bg5Title[0].style.opacity = 1;
            this.$refs.bg6[0].style.opacity = .6;
            this.$refs.bg6Title[0].style.opacity = 1;
            this.$refs.bg7[0].style.opacity = .6;
            this.$refs.bg7Title[0].style.opacity = 1;
            this.$refs.bg8[0].style.opacity = .6;
            this.$refs.bg8Title[0].style.opacity = 1;
            this.$refs.bg9[0].style.opacity = .6;
            this.$refs.bg9Title[0].style.opacity = 1;
            this.$refs['bg'+i][0].style.opacity = 1;
            this.$refs['bg'+i+'Title'][0].style.opacity = 0;
        }
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
