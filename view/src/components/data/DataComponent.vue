<template>
  <div class="header requestHeader">
    <p>Request Header</p>
    <pre>{{ formatRequestHeader }}</pre>
  </div>
  <div class="header">
    <p>Response Header</p>
    <pre>{{ formatResponseHeader }}</pre>
  </div>
</template>

<script>
export default {
  name: "DataComponent",
  props: [
    'requestHeaders',
    'responseHeaders'

  ],
  computed: {
    formatRequestHeader() {
      if (this.requestHeaders !== '') {
        return JSON.stringify(JSON.parse(this.requestHeaders), null, 2);
      } else {
        return '';
      }
    },
    formatResponseHeader() {
      if (this.responseHeaders !== '') {
        return JSON.stringify(JSON.parse(this.responseHeaders), null, 2);
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
    align-self: center;
    left: 350px;
    border: 1px solid black;
  }

  .requestHeader {
    position: relative;
    bottom: 160px;
    left: 600px;
  }

  p {
    border-bottom: 1px solid black;
  }

  pre {
    height: auto;
    max-height: 180px;
    overflow: auto;
    word-break: normal !important;
    word-wrap: normal !important;
    white-space: pre !important;
  }


</style>