<template>
  <main>
    <section>
      <itemList />
    </section>
    <section>
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

section {
  width: 50vw;
  height: 100%;
  display: inline-block;
  overflow-y: scroll;
  overflow-x: hidden;
}

section:first-of-type {
  background-color: blue;
}

section:last-of-type {
  background-color: red;
}
</style>