<template>
  <div></div>
</template>

<script>
// const url =
//     "https://api.data.netwerkdigitaalerfgoed.nl/datasets/ivo/NMVW/services/NMVW-23/sparql",
//   query = `
// PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
// PREFIX dc: <http://purl.org/dc/elements/1.1/>
// PREFIX dct: <http://purl.org/dc/terms/>
// PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
// PREFIX edm: <http://www.europeana.eu/schemas/edm/>
// PREFIX foaf: <http://xmlns.com/foaf/0.1/>
// prefix xsd: <http://www.w3.org/2001/XMLSchema#>

// SELECT ?cho ?img ?title ?cat WHERE {
//   #Categorie
// 	<https://hdl.handle.net/20.500.11840/termmaster2815> skos:* ?catURI .
//   	?cho edm:isRelatedTo ?catURI .
//     ?catURI skos:prefLabel ?cat .
//   #Image
//     ?cho edm:isShownBy ?img .
//   #Title
//     ?cho dc:title ?title .

//   FILTER langMatches(lang(?title), "eng")
// } LIMIT 100
// `;

// fetch(url + "?query=" + encodeURIComponent(query) + "&format=json")
//   .then(response => {
//     if (response.status == 200 && response.ok == true) {
//       console.log("The JSON was succesfully fetched!");
//       return response.json();
//     } else {
//       console.log("Oops, we couldn't fetch the data!");
//     }
//   })
//   .then(json => {
//     console.log(json.results.bindings);
//   })
//   .catch(err => {
//     console.log(err);
//   });

export default {
  name: "itemList",
  components: {},
  data() {
    return {};
  },
  mounted() {}
};
</script>

<style scoped>
</style>
