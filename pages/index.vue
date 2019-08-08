<template>
  <div class="container">
    <div>
      <h1>RH PORTAL CONCEPTS</h1>
      <a href="/design10">Design 10</a>
      <a href="/design11">Design 11</a>
      <a href="/design12">Design 12</a>
      <a href="/design13">Design 13</a>
      <a href="/design14">Design 14</a>
      <a href="/design15">Design 15</a>
    </div>
  </div>
</template>

<style>
.container {
  margin: 0 auto;
  display: flex;
  justify-content: center;
  min-height: 100vh;
}
.container div {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.container h1 {
  font-size: 30pt;
  font-weight: unset;
}
.container a {
  padding: 20px 0;
  color: #D5D5D5;
  text-decoration: none;
}
.container a:hover {
  color: #000;
}
.container a {
  transition: color 500ms ease-in;
  -webkit-transition: color 500ms ease-in;
}
</style>
