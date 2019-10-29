<template>
  <div>
    <div v-for="(item, index) in items" v-bind:key="item.id" v-bind:id="'item' + index">
      <item v-bind:item="item" />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import item from "./item.vue";

export default {
  name: "itemList",
  components: {
    item
  },
  props: {
    item: null
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
        } LIMIT 2
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
div:first-of-type {
  display: flex;
  flex-direction: column;
}

.left > div > div {
  align-self: flex-end;
}
</style>
