<template>
  <nav class="nav">
    <div class="nav__title">
      {{title}}
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
  props: {
    title: {
      type: String
    }
  }
}
</script>

<style scoped lang="scss">
.nav {
  &__title {
    font-size: 2em;
    background: $star-command-blue;
    color: white;
    padding: 10px 0;
    text-align: center;
    width: 100vw;
  }
}
</style>
