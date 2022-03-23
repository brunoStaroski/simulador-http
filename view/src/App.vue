<template>
  <div id="request">
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
  </div>
  <data-component :headers="headerRequest"></data-component>
  <response-component :response="responseBody"></response-component>
</template>

<script>
import DataComponent from "@/components/data/DataComponent";
import ResponseComponent from "@/components/response/ResponseComponent";

const axios = require('axios').default;
const api = 'http://localhost:3080';

export default {
  name: 'App',

  components: {
    DataComponent,
    ResponseComponent
  },
  data() {
    return {
      headerRequest: '',
      headerResponse: '',
      responseBody: ''
    }
  },
  methods: {
    async executeGet() {
      axios.get(`${api}/executar-get`)
          .then(
              res => {
                this.responseBody = res.data;
                this.headerResponse = res.headers;
              },
              err => console.log(err)
          );
      axios.interceptors.request.use( (request) => {
          if (request) {
            console.log('object: ' + request);
            console.log('json string: ' + JSON.stringify(request));
            this.headerRequest = JSON.stringify(request); //"\t"
        }
      }, null, {synchronous: true});
    },
  },

}
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  #request table {
    border: 1px solid black;
    width: 30%;
    height: 180px;
  }

  #request button {
    width: 75%;
    height: 30px;
    margin-bottom: 5px;
  }

</style>
