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
  box-sizing: border-box;
  font-family: Helvetica, arial;
}

body,
h1,
h2 {
  margin: 0px;
  padding: 0px;
}
</style>