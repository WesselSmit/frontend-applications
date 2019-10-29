<template>
  <main>
    <div>
      <h2>North-America</h2>
      <h1>NMVW Comparison</h1>
      <h2>South-America</h2>
    </div>
    <section class="left">
      <div v-for="(item, index) in items" v-bind:key="item.id" v-bind:id="'item' + index">
        <item v-bind:item="item" />
      </div>
    </section>
    <section class="right">
      <div v-for="(item, index) in items" v-bind:key="item.id" v-bind:id="'item' + index">
        <item v-bind:item="item" />
      </div>
    </section>
  </main>
</template>

<script>
import axios from "axios";
import item from "./item.vue";

export default {
  name: "listUI",
  components: {
    item
  },
  data() {
    return {
      items: []
    };
  },
  created() {
    const url =
        "https://api.data.netwerkdigitaalerfgoed.nl/datasets/ivo/NMVW/services/NMVW-23/sparql",
      query = `
        PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
        PREFIX dc: <http://purl.org/dc/elements/1.1/>
        PREFIX dct: <http://purl.org/dc/terms/>
        PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
        PREFIX edm: <http://www.europeana.eu/schemas/edm/>
        PREFIX foaf: <http://xmlns.com/foaf/0.1/>
        PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>

        SELECT ?cho ?img ?title ?cat WHERE {
          #Categorie
          	<https://hdl.handle.net/20.500.11840/termmaster2815> skos:* ?catURI .
          	?cho edm:isRelatedTo ?catURI .
            ?catURI skos:prefLabel ?cat .
          #Image
            ?cho edm:isShownBy ?img .
          #Title
            ?cho dc:title ?title .

          FILTER langMatches(lang(?title), "eng")
        } LIMIT 5
      `;
    axios
      .get(url + "?query=" + encodeURIComponent(query) + "&format=json")
      .then(res => (this.items = res.data.results.bindings))
      .then(res => console.log(res))
      .then(res => {
        //Unavailable images have '-Extra' in their URL, so we renavigate the src to the unavailable image (URL without the '-Extra')
        this.items.forEach(function(item) {
          item.img.value = item.img.value.replace("http", "https");
          if (item.img.value.includes("-Extra")) {
            item.img.value = item.img.value.replace("-Extra", "");
          }
        });
      })
      .catch(err => console.log(err));
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

section > div {
  display: flex;
  flex-direction: column;
}

section > div > article {
  background-color: #474c56;
  border: 1px solid #474c56;
  margin-bottom: 20px;
  padding: 10px;
  width: auto;
  display: inline-block;
  cursor: pointer;
}

.left > div > * {
  align-self: flex-end;
}

.right > div > * {
  align-self: flex-start;
}
</style>