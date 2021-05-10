<template>
  <font-awesome-icon class="icon" v-if="currency === 'USD'" icon="dollar-sign"/>
  <font-awesome-icon class="icon" v-else-if="currency === 'RUB'" icon="ruble-sign"/>
  <font-awesome-icon class="icon" v-else-if="currency === 'EUR'" icon="euro-sign"/>
</template>

<script>
export default {
  name: "CurrencyIcon",
  props: ["currency"]
}
</script>
