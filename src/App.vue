<template>
  <div id="app">
    <listUI />
  </div>
</template>

<script>
import listUI from "./components/listUI.vue";

export default {
  name: "app",
  components: {
    listUI
  }
};
</script>

<style>
* {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}

body {
  font-family: helvetica, arial, sans-serif;
}
</style>