<template>
  <div id="app">
    <app-section></app-section>
  </div>
</template>

<script>
  export default {
    data () {
      return {
          
      };
    },
    methods: {

    }
  }
</script>

<style>
body{
  background-image: url('assets/images/back.jpg');
  background-size: cover;
  height:100vh;
  display: flex;
  justify-content: center;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
*,
*::before,
*::after{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html{
  font-size: 62.5%;
}
</style>