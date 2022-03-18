<template>
  <div class="mainDiv">
    <RequestComponent></RequestComponent>
    <DataComponent></DataComponent>
    <response-component></response-component>
  </div>


</template>

<script>


import RequestComponent from "@/components/request/RequestComponent";
import DataComponent from "@/components/data/DataComponent";
import ResponseComponent from "@/components/response/ResponseComponent";

export default {
  name: 'App',
  components: {
    RequestComponent,
    DataComponent,
    ResponseComponent
  }
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

</style>
