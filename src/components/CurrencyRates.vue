<template>
  <div class="currency-rates">
    <CircularDotLoader v-if="isLoading"/>
    <div v-else-if="apiData">
      <CurrencyRate v-for="(rate, currency) in apiData.rates" :key="currency" :currency="currency" :rate="rate" :base="apiData.base"/>
    </div>
    <div v-else class="unexcepted-error">
      <h1>Something went wrong.</h1>
    </div>
  </div>
</template>

<script>
import CurrencyRate from "./CurrencyRate";
import CircularDotLoader from "./CircularDotLoader";

export default {
  name: "CurrencyRates",
  data() {
    return {
      isLoading: true,
      apiData: null
    }
  },
  mounted() {
    this.isLoading = true
    this.axios.get('https://api.currencyfreaks.com/latest?apikey=9d76b61ddba34617a45a72639b3e6aed&symbols=RUB,EUR')
        .then((response) => {
          this.apiData = response.data
          this.isLoading = false
        }).catch(() => {
      this.isLoading = false
    })
  },
  components: {
    CurrencyRate,
    CircularDotLoader
  }
}
</script>

<style scoped lang="scss">
.currency-rates {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
</style>
