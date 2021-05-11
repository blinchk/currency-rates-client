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
  display: flex;
  flex-direction: row;
  width: 100vw;
  padding: 10px 0;
  background: $star-command-blue;
  &__title {
    margin-left: 30px;
    color: white;
    text-align: center;
    box-sizing: border-box;
  }
}
</style>
