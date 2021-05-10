<template>
  <div class="home">
    <CurrencyRates/>
  </div>
</template>

<script>
import CurrencyRates from "../components/CurrencyRates";

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
  height: 90vh;
}
</style>
