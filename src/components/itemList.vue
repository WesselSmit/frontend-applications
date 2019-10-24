<template>
  <ul>
    <li v-for="(item, index) in items" v-bind:key="item.id" v-bind:id="'item' + index">
      {{ index }} - {{ item.title.value }}
      <img v-bind:src="item.img.value" />
    </li>
  </ul>
</template>

<script>
export default {
  name: "itemList",
  props: ["items"]
};
</script>

<style scoped>
img {
  height: 100px;
  width: auto;
}
</style>
