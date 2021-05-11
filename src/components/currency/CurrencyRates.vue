<template>
  <div class="currency-rates">
    <CircularDotLoader v-if="isLoading"/>
    <div v-else-if="apiData">
      <span v-show="invalidInputError.active" class="error-input-input">{{ invalidInputError.msg }}</span>
      <div class="amount-input"><input id="money-amount" v-model="moneyAmount" max="100000" min="1" type="text"> $</div>
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
import moment from "moment"

import CurrencyRate from "./CurrencyRate"
import CircularDotLoader from "../general/CircularDotLoader"

export default {
  name: "CurrencyRates",
  data() {
    return {
      moneyAmount: 1,
      isLoading: true,
      apiData: null,
      invalidInputError: {
        msg: "",
        active: false
      }
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
      return moment(this.apiData.date).format('DD.MM.YYYY')
    }
  },
  watch: {
    moneyAmount: function () {
      if (isNaN(this.moneyAmount)) {
        this.moneyAmount = this.moneyAmount.substring(0, this.moneyAmount.length - 1)
        this.pushInvalidInputError("Amount must contain only numbers.")
      } else if (this.moneyAmount.length === 0) {
        this.moneyAmount = 1
        this.pushInvalidInputError("Amount must be larger than zero.")
      } else if (this.moneyAmount > 100000) {
        this.moneyAmount = 100000
        this.pushInvalidInputError("Amount must be smaller or equal than 100000.")
      }
    }
  },
  methods: {
    pushInvalidInputError(msg) {
      this.showInvalidInputError(msg)
      setTimeout(() => this.hideInvalidInputError(), 500)
    },
    showInvalidInputError(msg) {
      this.invalidInputError.active = true
      this.invalidInputError.msg = msg
    },
    hideInvalidInputError() {
      this.invalidInputError.active = false
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
    padding: 5px;
    border-radius: 3px;
    border: solid 1px $star-command-blue;
    transition: all .3s;

    &-webkit-outer-spin-button,
    &-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    & {
      -moz-appearance: textfield;
    }

    &:focus {
      border: solid 1px $maroon-x-11;
      transform: scale(1.05);
    }

    &:hover {
      transform: scale(1.05);
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

.error-input-input {
  display: flex;
  flex-direction: row;
  justify-content: center;
  color: $maroon-x-11;
  margin-bottom: 5px;
}
</style>
