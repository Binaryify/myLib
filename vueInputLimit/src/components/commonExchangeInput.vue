<template>
  <input type="text" @input="input($event)" :value="val">
</template>

<script>
export default {
  props: ['value', 'fixed', 'sum'],
  data() {
    return {
      val: ''
    }
  },
  methods: {
    input(ev) {
      ev.target.value = ev.target.value.replace(/^0*(0\.|[1-9])/, '$1') // 解决 粘贴不生效
      ev.target.value = ev.target.value.replace(/[^\d.]/g, '') // 清除“数字”和“.”以外的字符
      ev.target.value = ev.target.value.replace(/\.{2,}/g, '.') // 只保留第一个. 清除多余的
      ev.target.value = ev.target.value
        .replace('.', '$#$')
        .replace(/\./g, '')
        .replace('$#$', '.')
      // ev.target.value = ev.target.value.replace(/^(\-)*(\d+)\.(\d\d\d\d).*$/, '$1$2.$3'); // 只能输入4个小数，且小数点前必须有数字
      const length = this.fixed
      const reg2 = new RegExp('^(-)*(\\d*?)\\.(\\d{1,' + length + '}).*$')
      ev.target.value = ev.target.value.replace(reg2, '$1$2.$3') // 只能输入N个小数，小数点前面可以没有数字
      if (ev.target.value.indexOf('.') < 0 && ev.target.value != '') {
        // 如果没有小数点，首位不能为类似于 01、02的金额
        if (
          ev.target.value.substr(0, 1) == '0' &&
          ev.target.value.length == 2
        ) {
          ev.target.value = ev.target.value.substr(1, ev.target.value.length)
        }
      }
      if (ev.target.value.indexOf('.') === 0 && ev.target.value.length > 1) {
        // 如果第一个字符时“.”，那么当“.”后面有数字后，"."前面自动补零
        ev.target.value = 0 + ev.target.value
      }
      if (this.sum) {
        if (Number(ev.target.value) > Number(this.sum)) {
          ev.target.value = this.sum
        }
      }

      this.val = ev.target.value
      this.$emit('input', this.val)
    }
  }
}
</script>
