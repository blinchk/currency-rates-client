<template>
  <div class="currency-rate">
    <div class="currency-rate__codes">{{base.toUpperCase()}} TO {{currency.toUpperCase()}}</div>
    <div class="currency-rate__card">
      <span class="currency-rate-from">{{ amount }} <currency-icon :currency="base"/></span>
      <font-awesome-icon icon="arrow-right" class="icon icon-arrow"/>
      <span class="currency-rate-to">{{ (amount * rate).toFixed(2) }} <currency-icon :currency="currency"/></span>
    </div>
  </div>
</template>

<script>
import CurrencyIcon from "./CurrencyIcon";

export default {
  name: "CurrencyRate",
  props: ["rate", "currency", "base", "amount"],
  components: {
    CurrencyIcon
  }
}
</script>

<style scoped lang="scss">
.currency-rate {
  text-align: center;
  min-width: 300px;
  max-width: 500px;

  &__codes {
    font-size: .75rem;
    margin: 5px;
  }

  &__card {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    padding: 10px;
    border: solid 1px $star-command-blue;
    font-size: 2rem;
    border-radius: 2px;

    transition: 0.3s;

    &:hover {
      transform: scale(1.02);
      color: $star-command-blue;
      box-shadow: 1px 1px 3px #000000dd;
    }
  }

  &-from, &-to {
    display: flex;
    flex-direction: row;
    align-items: center;
    text-align: center;
  }
}

.icon {
  font-size: 1.25rem;
  margin-left: 5px;
  &-arrow {
    padding: 0 10px;
  }
}
</style>
