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
            <div class="nav">
                <a href="">COLLECTIONS</a>
                <a href="">SOURCE BOOKS</a>
                <a href="">GALLERIES</a>
                <a href="">RESTAURANTS</a>
                <a href="">DESIGN SERVICES</a>
                <a href="">PLANES</a>
                <a href="">YATCH</a>
                <a href="">RESIDENCES</a>
                <a href="">GUEST HOUSES</a>
            </div>
        </div>
        <div class="bg bg-1"><p class="reveal">COLLECTIONS</p></div>
        <div class="bg bg-2"><p class="reveal">SOURCE BOOKS</p></div>
        <div class="bg bg-3"><p class="reveal">DESIGN SERVICES</p></div>
        <div class="bg bg-4"><p class="reveal">GALLERIES</p></div>
        <div class="bg bg-5"><p class="reveal">RESTAURANTS</p></div>
        <div class="bg bg-6"><p class="reveal">RESIDENCES</p></div>
        <div class="bg bg-7"><p class="reveal">GUEST HOUSES</p></div>
        <div class="bg bg-8"><p class="reveal">PLANES</p></div>
        <div class="bg bg-9"><p class="reveal">YATCHS</p></div>
    </div>
</template>


<script>
import ScrollReveal from 'scrollreveal'

export default {
    mounted() {
        window.addEventListener('load', () => {
            ScrollReveal({ reset: true, duration: 1500 })
            ScrollReveal().reveal('.reveal')
        })
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
    top: 25px;
}

.hero {
    display: flex;
    align-items: center;
    height: 100vh;
    animation: fadeIn 1s ease-in;
    color: white;
    margin-bottom: 30px;
}

.hero video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100%;
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

.nav {
    display: flex;
    z-index: 1;
    width: 100%;
    justify-content: center;
    position: absolute;
    bottom: 25px;
}

.nav a {
    padding: 0 25px;
    font-family: 'BaronSans-Roman';
    font-size: 5.4pt;
    line-height: 21.6pt;
    letter-spacing: .15em;
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

.bg {
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 85vh;
    width: 100%;
}

.bg p {
    color: white;
    font-family: 'CaslonRH-Superfine';
    font-size: 72pt;
    line-height: 16.8pt;
}

.bg-1 {
    background-image: url('/design11/11_bg_01.jpg');
}

.bg-2 {
    background-image: url('/design11/11_bg_02.jpg');
}

.bg-3 {
    background-image: url('/design11/11_bg_03.jpg');
}

.bg-4 {
    background-image: url('/design11/11_bg_04.jpg');
}

.bg-5 {
    background-image: url('/design11/11_bg_05.jpg');
}

.bg-6 {
    background-image: url('/design11/11_bg_06.jpg');
}

.bg-7 {
    background-image: url('/design11/11_bg_07.jpg');
}

.bg-8 {
    background-image: url('/design11/11_bg_08.jpg');
}

.bg-9 {
    background-image: url('/design11/11_bg_09.jpg');
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
