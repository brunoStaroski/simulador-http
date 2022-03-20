<template>
  <div>
    <input type="text" readonly="readonly" :value="headers" />


  </div>
</template>

<script>
export default {
  name: "DataComponent",
  props: [
      'headers'
  ]
}
</script>

<style scoped>
  input {
    width: 30%;
    height: 155px;
    position: relative;
    bottom: 160px;
  }


</style>