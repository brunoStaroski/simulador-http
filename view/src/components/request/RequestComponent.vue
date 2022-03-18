<template>
  <div>
    <table>
      <tr>
        <td><button type="button" name="GET" @click="executeGet()">GET</button></td>
      </tr>
      <tr>
        <td><button type="button" name="POST">POST</button></td>
      </tr>
      <tr>
        <td><button type="button" name="PUT">PUT</button></td>
      </tr>
      <tr>
        <td><button type="button" name="DELETE">DELETE</button></td>
      </tr>
    </table>
  </div>
</template>

<script>
const axios = require('axios').default;

export default {
  name: "RequestComponent",

  methods: {
    executeGet() {




    }


  }


}




</script>

<style scoped>
  table {
    border: 1px solid black;
    width: 30%;
  }

  button {
    width: 75%;
    height: 30px;
    margin-bottom: 5px;
  }






</style>