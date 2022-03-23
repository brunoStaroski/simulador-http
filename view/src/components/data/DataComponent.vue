<template>
  <div class="header">
    <pre>{{ pretty }}</pre>
  </div>
</template>

<script>
export default {
  name: "DataComponent",
  props: [
    'headers'

  ],
  computed: {
    pretty() {
      if (this.headers != '') {
        console.log(this.headers);
        return JSON.stringify(JSON.parse(this.headers), null, 2);
      } else {
        return '';
      }

    }
  }

}
</script>

<style scoped>
  .header {
    width: 30%;
    height: 180px;
    position: relative;
    bottom: 160px;
    align-self: center;
    left: 350px;
    border: 1px solid black;
  }

  pre {
    height: auto;
    max-height: 180px;
    overflow: auto;
    background-color: #eeeeee;
    word-break: normal !important;
    word-wrap: normal !important;
    white-space: pre !important;
  }


</style>