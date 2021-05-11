<template>
  <main class="home">
    <CurrencyRates/>
  </main>
</template>

<script>
import CurrencyRates from "../components/currency/CurrencyRates";

export default {
  name: 'Home',
  components: {
    CurrencyRates
  }
}
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 95vh;
}

#search {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
</style>
