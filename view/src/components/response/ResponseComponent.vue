<template>
    <input type="text" readonly="readonly" :value="response" class="responseBody"/>
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
  .responseBody {
    width: 30%;
    height: 580px;
    position: relative;
    bottom: 190.5%;
    float: right;
  }
</style>