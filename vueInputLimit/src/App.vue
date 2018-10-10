<template>
  <div id="app">
    <common-input v-model="value" :fixed='fixed' :sum="sum"  ></common-input>
    {{value}}
  </div>
</template>

<script>
import commonInput from './components/commonExchangeInput.vue'

export default {
  name: 'app',
  components: {
    commonInput
  },
  data() {
    return {
      value: 0,
      fixed: 5,
      sum: 500
    }
  }
}
</script>

