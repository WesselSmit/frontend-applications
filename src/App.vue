<template>
  <div id="app"></div>
</template>

<script>
import itemList from "./components/itemList.vue";

export default {
  name: "app",
  components: {
    itemList
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
