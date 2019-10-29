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
  background-color: #474c56;
  border: 1px solid #474c56;
  margin-bottom: 20px;
  padding: 10px;
  width: auto;
  display: inline-block;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.16) 1px 8px 8px;
}

.left > div > article {
  border-radius: 5px 0px 5px 5px;
}

.right > div > article {
  border-radius: 0px 5px 5px 5px;
}

article > h2 {
  font-size: 20px;
  color: #d6d7d9;
  font-weight: 400;
  background-color: #474c56;
  text-align: center;
  padding-top: 3px;
}

article > img {
  max-height: 200px;
  width: auto;
  max-width: 40vw;
  display: block;
  margin: auto;
}
</style>
