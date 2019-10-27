<template>
  <main>
    <div>
      <h2>North-America</h2>
      <h1>NMVW Comparison</h1>
      <h2>South-America</h2>
    </div>
    <section class="left">
      <itemList />
    </section>
    <section class="right">
      <itemList />
    </section>
  </main>
</template>

<script>
import itemList from "./itemList.vue";

export default {
  name: "listUI",
  components: {
    itemList
  }
};
</script>

<style scoped>
main {
  height: 100vh;
}

main > div:first-of-type {
  width: 100vw;
  height: 6vh;
  padding: 10px 30px;
  display: flex;
  justify-content: space-between;
}

main > div:first-of-type > * {
  align-self: flex-end;
}

main > section {
  width: 50vw;
  height: 94vh;
  display: inline-block;
  overflow-y: scroll;
  overflow-x: hidden;
  padding: 20px;
}

section.left {
  background-color: lightslategray;
  border-right: 5px solid black;
}

section.right {
  background-color: grey;
  border-left: 5px solid black;
}
</style>