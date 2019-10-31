<template>
  <article @click="details">
    <img v-bind:alt="item.title.value" v-bind:src="item.img.value" />
    <div class="hide">
      <h2>{{item.title.value}}</h2>
      <p class="type">Type: {{item.type.value}}</p>
      <p class="culture">{{item.culture.value}}</p>
      <p class="time">{{item.time.value}}</p>
      <p class="placeSpecfic">{{item.placeSpecific.value}}</p>
      <p place="cat">{{item.cat.value}}</p>
      <a target="_blank" v-bind:href="item.cho.value">Source</a>
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
        itemObj = {
          title: thisItem.title.value,
          cho: thisItem.cho.value,
          clicked: 1
        },
        Arr = [itemObj],
        newItem = false,
        isUpdated = false;

      if (localStorage.getItem("metadata") == null) {
        localStorage.setItem("metadata", JSON.stringify(Arr));
        Arr = JSON.parse(localStorage.getItem("metadata"));
        console.table(JSON.parse(localStorage.getItem("metadata")));
      } else {
        Arr = JSON.parse(localStorage.getItem("metadata"));
        Arr.forEach(function(el, index) {
          if (el.cho == thisItem.cho.value) {
            el.clicked++;
            Arr[index] = el;
            localStorage.setItem("metadata", JSON.stringify(Arr));
            console.table(JSON.parse(localStorage.getItem("metadata")));
            isUpdated = true;
          } else {
            newItem = true;
          }
        });

        if (newItem && !isUpdated) {
          Arr.push(itemObj);
          localStorage.setItem("metadata", JSON.stringify(Arr));
          console.table(JSON.parse(localStorage.getItem("metadata")));
        }
      }
      console.log(this);
      console.log(event.target);
      // event.target.classList.toggle("hide");
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

article.selected {
  opacity: 0;
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
  font-size: 20px;
  font-weight: 400;
  margin: 5px 0px;
}

article > div > a {
  text-decoration: none;
  color: rgb(94, 94, 240);
}

div > article > div {
  position: absolute;
  left: -9999px;
}

div.active > article > div {
  position: relative;
  left: 0px;
}
</style>



