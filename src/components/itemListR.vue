<template>
  <div>
    <article v-for="(item, index) in items" v-bind:key="item.id" v-bind:id="'item' + index">
      <h2>{{ item.title.value }}</h2>
      <img v-bind:src="item.img.value" />
    </article>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "itemList",
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
        } LIMIT 10
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
article {
  background-color: white;
  border: 1px solid white;
  margin-bottom: 20px;
  padding: 10px;
  width: calc(100% - 20px);
}

article:last-of-type {
  margin-bottom: 0px;
}
/* TODO: de articles zijn niet hetzelfde gepositioneerd aan beide kanten van de timeline */
.left > div > article {
  border-radius: 5px 0px 5px 5px;
  margin: 0px 10px 20px 0px;
}

.right > div > article {
  border-radius: 0px 5px 5px 5px;
  margin: 0px 0px 20px 30px;
}

img {
  height: 100px;
  width: auto;
  display: block;
}
</style>
