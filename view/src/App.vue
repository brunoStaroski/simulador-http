<template>
  <div id="request">
    <div>
      <table>
        <tr>
          <td><button type="button" name="GET" @click="executeGet()">GET</button></td>
        </tr>
        <tr>
          <td><button type="button" name="POST" @click="executarPost()">POST</button></td>
        </tr>
      </table>
    </div>
  </div>
  <data-component :requestHeaders="headerRequest" :responseHeaders="headerResponse"></data-component>
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
    limparCampos() {
      this.headerResponse = '';
      this.headerRequest = '';
      this.responseBody = '';
    },

    async executeGet() {
      this.limparCampos();
      await axios.get(`${api}/executar-get`).then(
              res => {
                console.log(res.request);
                //TODO
                this.headerRequest = JSON.stringify(request);
                this.responseBody = res.data;
                this.headerResponse = JSON.stringify(res.headers);
              },
              err => {
                console.log(err)
                this.headerRequest = JSON.stringify(err);
              }
      );
    },

    async executarPost() {
      this.limparCampos();
      axios.post(`${api}/executar-post`, {dado: 'POST'}).then(
          res => {
            //TODO
            this.headerRequest = JSON.stringify(res.request);
            this.responseBody = res.data;
            this.headerResponse = JSON.stringify(res.headers);
          },
          err => {
            console.log(err)
            this.headerRequest = JSON.stringify(err);
          }
      );
      //TODO
    }
  }

}
//TODO
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
