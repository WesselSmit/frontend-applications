<template>
  <article>
    <img v-bind:src="item.img.value" />
    <h2>{{ item.title.value }}</h2>
  </article>
</template>

<script>
export default {
  name: "item",
  props: {
    item: null
  }
};
</script>

<style scoped>
article {
  background-color: white;
  border: 1px solid white;
  margin-bottom: 20px;
  padding: 10px;
  width: auto;
  display: inline-block;
  cursor: pointer;
}

.left > div > div > article {
  border-radius: 5px 0px 5px 5px;
}

.right > div > div > article {
  border-radius: 0px 5px 5px 5px;
}

article > h2 {
  font-size: 20px;
  text-align: center;
}

article > img {
  max-height: 200px;
  width: auto;
  max-width: 100%;
}
</style>
