<template>
  <div id="app">
    <NavBar :title="title"/>
    <Home/>
  </div>
</template>

<script>
import Home from "./views/Home";
import NavBar from "./components/NavBar";

export default {
  components: {
    Home,
    NavBar
  },
  data() {
    return {
      title: "Currency Rates"
    }
  }
}

</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap');

body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: 'Ubuntu', sans-serif;
}

</style>
