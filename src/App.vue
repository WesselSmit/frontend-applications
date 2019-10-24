<template>
  <div id="app">
    <ul>
      <li
        v-for="(item, index) in items"
        v-bind:key="item.id"
        v-bind:id="'item' + index"
      >{{ index }} - {{ item.title.value }}</li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
import itemList from "./components/itemList.vue";

export default {
  name: "app",
  components: {
    itemList
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
        } LIMIT 100
      `;
    axios
      .get(url + "?query=" + encodeURIComponent(query) + "&format=json")
      .then(res => (this.items = res.data.results.bindings))
      .then(res => console.log(res))
      .catch(err => console.log(err));
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
