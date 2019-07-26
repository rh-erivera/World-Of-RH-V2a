<template>
    <div class="container">
        <div class="hero">
            <div class="quote">
                <p class="RH-Caslon">“Rather than looking to the past, we believe in destroying today’s reality to create tomorrow’s future. Only by taking risks can we explore our unlimited potential.”</p>
                <p class="Baron-Sans">—Gary Friedman</p>
            </div>
            <img class="logo" src="/RH-logo.svg" alt="">
        </div>
    </div>
</template>

<script>
export default {
    
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
    background-image: url('/design11/11319617-hd.png');
    background-size: cover;
    background-position: center;
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
</style>
