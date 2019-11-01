<template>
  <article @click="details">
    <img v-bind:alt="item.title.value" v-bind:src="item.img.value" />
    <div class="hide">
      <h2>{{item.title.value}}</h2>
      <p class="type">
        <span>Wapensoort:</span>
        {{item.type.value}}
      </p>
      <p class="time">
        <span>Datering:</span>
        {{item.time.value}}
      </p>
      <p class="placeSpecfic">
        <span>Herkomst:</span>
        {{item.placeSpecific.value}} - {{item.placeAltLabel2.value}}
      </p>
      <p class="culture">
        <span>Cultuur:</span>
        {{item.culture.value}}
      </p>
      <!-- <p place="cat">{{item.cat.value}}</p> -->
      <a class="source" target="_blank" v-bind:href="item.cho.value">Source</a>
    </div>
  </article>
</template>

<script>
/*eslint 'no-console':0*/
export default {
  name: "item",
  props: {
    item: null
  },
  methods: {
    details: function() {
      let thisItem = this.item,
        // create an object for the viewed items
        itemObj = {
          title: thisItem.title.value,
          cho: thisItem.cho.value,
          clicked: 1
        },
        Arr = [itemObj],
        newItem = false,
        isUpdated = false;

      if (localStorage.getItem("metadata") == null) {
        // if there are no items in the localStorage we create push the first object
        localStorage.setItem("metadata", JSON.stringify(Arr));
        Arr = JSON.parse(localStorage.getItem("metadata"));
      } else {
        //if the localStorage already has an array we store we check if this particular item is stored in the localStorage
        Arr = JSON.parse(localStorage.getItem("metadata"));
        Arr.forEach(function(el, index) {
          if (el.cho == thisItem.cho.value) {
            //if this item is already in the localStorage array we only update the clicked propery
            el.clicked++;
            Arr[index] = el;
            localStorage.setItem("metadata", JSON.stringify(Arr));
            isUpdated = true;
          } else {
            //if it's not in the localStorage array we set the newItem var to true
            newItem = true;
          }
        });

        if (newItem && !isUpdated) {
          //if the newItem var is true the item will be pushed into the localStorage array
          Arr.push(itemObj);
          localStorage.setItem("metadata", JSON.stringify(Arr));
        }
      }
      console.table(JSON.parse(localStorage.getItem("metadata")));
    }
  }
};
</script>

<style scoped>
article {
  background-color: white;
  border: 1px solid white;
  padding: 10px;
  margin-bottom: 20px;
  width: auto;
  display: inline-block;
  cursor: pointer;
  display: grid;
}

.left > div > article:hover {
  margin-right: 10px;
}

.right > div > article:hover {
  margin-left: 10px;
}

.left > div > article {
  border-radius: 5px 0px 5px 5px;
}

.right > div > article {
  border-radius: 0px 5px 5px 5px;
}

article > div > * {
  margin: 0px;
}

article > img {
  max-height: 400px;
  width: auto;
  max-width: 40vw;
  display: block;
  margin: auto;
}

article > div > h2 {
  font-size: 18px;
  font-weight: bold;
  margin: 5px 0px;
}

article > div > p {
  font-size: 15px;
  margin-bottom: 2px;
}

span {
  font-weight: bold;
}

.type:first-letter {
  text-transform: uppercase;
}

.source {
  text-decoration: none;
  color: rgb(94, 94, 240);
  position: relative;
  left: calc(100% - 50px);
}

.source:hover {
  color: rgb(39, 39, 145);
}

div > article > div {
  position: absolute;
  left: -9999px;
  transition: ease opacity 0.5s;
}

div.active > article > div,
div.activeAlt > article > div {
  position: relative;
  left: 0px;
  transition: ease opacity 0.5s;
}

div.active > article {
  margin-right: 20px;
}

div.activeAlt > article {
  margin-left: 20px;
}
</style>

