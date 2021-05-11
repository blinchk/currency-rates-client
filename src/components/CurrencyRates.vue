<template>
  <div class="currency-rates">
    <CircularDotLoader v-if="isLoading"/>
    <div v-else-if="apiData">
      <div class="amount-input"><input id="money-amount" v-model="moneyAmount" max="100000" min="1" type="text"> $
      </div>
      <CurrencyRate v-for="(rate, currency) in apiData.rates" :key="currency" :amount="moneyAmount" :base="apiData.base"
                    :currency="currency" :rate="rate"/>
      <p class="last-update-time">Last update: {{ lastUpdateTime }}</p>
    </div>
    <div v-else class="unexcepted-error">
      <h1>Something went wrong.</h1>
    </div>
  </div>
</template>

<script>
import moment from "moment";

import CurrencyRate from "./CurrencyRate";
import CircularDotLoader from "./CircularDotLoader";

export default {
  name: "CurrencyRates",
  data() {
    return {
      moneyAmount: 1,
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
  computed: {
    lastUpdateTime() {
      return moment(this.apiData.date).format('DD.MM.YYYY') + " UTC"
    }
  },
  components: {
    CurrencyRate,
    CircularDotLoader
  }
}
</script>

<style scoped lang="scss">
.amount-input {
  text-align: center;

  #money-amount {
    width: 4rem;
    text-align: center;

    &-webkit-outer-spin-button,
    &-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    & {
      -moz-appearance: textfield;
    }
  }
}

.currency-rates {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.last-update-time {
  text-align: center;
  color: #212121;
  font-size: .75rem;
}
</style>
