<template>
  <main>
    <div>
      <h2>North-America</h2>
      <h1>NMVW Comparison</h1>
      <h2>South-America</h2>
    </div>
    <section class="left">
      <itemListL />
    </section>
    <section class="right">
      <itemListR />
    </section>
  </main>
</template>

<script>
import itemListL from "./itemListL.vue";
import itemListR from "./itemListR.vue";

export default {
  name: "listUI",
  components: {
    itemListL,
    itemListR
  }
};
</script>

<style scoped>
main {
  height: 100vh;
}

main > div:first-of-type {
  width: 100vw;
  height: 4.5vh;
  padding: 10px 30px 8px 30px;
  display: flex;
  justify-content: space-between;
  background-color: #272c35;
  color: #d6d7d9;
}

main > div:first-of-type > * {
  align-self: flex-end;
}

main > div:first-of-type h1 {
  font-size: 20px;
}

main > div:first-of-type h2 {
  font-size: 16px;
}

main > section {
  width: 50vw;
  height: 95.5vh;
  display: inline-block;
  overflow-y: scroll;
  overflow-x: hidden;
  padding: 20px;
  background-color: #323843;
  border-top: 2px solid #191c22;
}

section.left {
  border-right: 1px solid #191c22;
}

section.right {
  border-left: 1px solid #191c22;
}
</style>