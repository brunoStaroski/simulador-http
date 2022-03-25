<template>
  <div class="header requestHeader">
    <p>Request Header</p>
    <pre>{{ formatRequestHeader }}</pre>
  </div>
  <div class="header responseHeader">
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
    width: 37%;
    border: 1px solid black;
    position: relative;
    left: 31%;
    text-align: center;
    font-size: 18px;
    height: 280px;
  }

  .header p {
    font-size: 20px;
  }

  .requestHeader {
    bottom: 96.5%;
  }

  .responseHeader {
    bottom: 94%;
  }

  p {
    border-bottom: 1px solid black;
  }

  pre {
    max-height: 205px;
    overflow: auto;
    word-break: normal !important;
    word-wrap: normal !important;
    white-space: pre !important;
    padding: 3px;
    text-align: center;
  }

</style>