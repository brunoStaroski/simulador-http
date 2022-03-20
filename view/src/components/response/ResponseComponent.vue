<template>
  <div>
    <input type="text" readonly="readonly"/>


  </div>
</template>

<script>
export default {
  name: "ResponseComponent",
  props: [
      'response'
  ]
}
</script>

<style scoped>
  input {
    width: 30%;
    height: 155px;
    position: relative;
    bottom: 320px;
    float: right;
  }
</style>