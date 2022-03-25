<template>
  <div class="main">
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
  </div>
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

    extrairResponseHeader(request) {
      console.log(request);
      return JSON.stringify(new Array([
        {url: request.responseURL},
        {responseType: request.responseType},
        {response: request.response},
        {responseText: request.responseText},
        {status: request.status},
        {statusText: request.statusText},
        {timeout: request.timeout}
      ]))
    },

    async executeGet() {
      this.limparCampos();
      await axios.get(`${api}/executar-get`).then(
              res => {
                this.headerRequest = JSON.stringify(res.config);
                this.responseBody = res.data;
                this.headerResponse = this.extrairResponseHeader(res.request);
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
            console.log(res);
            this.headerRequest = JSON.stringify(res.config);
            this.responseBody = res.data;
            this.headerResponse = this.extrairResponseHeader(res.request);
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
  .main {
    width: 80%;
    height: 600px;
    margin: auto;
    font-size: 20px;
    padding: 50px;
  }

  #request table {
    border: 1px solid black;
    width: 30%;
    height: 580px;
  }

  #request button {
    width: 75%;
    height: 80px;
    margin-bottom: 5px;
    margin-left: 50px;
    font-size: 20px;

  }

</style>
