import Vue from 'vue'
import App from './App.vue'
import axios from "axios"
import VueAxios from "vue-axios"
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {faArrowRight, faDollarSign, faEuroSign, faRubleSign} from "@fortawesome/free-solid-svg-icons"

library.add(faArrowRight)

library.add(faDollarSign, faRubleSign, faEuroSign)

Vue.config.productionTip = false

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(VueAxios, axios)

new Vue({
  render: h => h(App)
}).$mount('#app')
