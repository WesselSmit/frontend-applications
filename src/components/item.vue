<template>
  <article @click="details">
    <img v-bind:src="item.img.value" />
    <h2>{{ item.title.value }}</h2>
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
    }
  }
};
</script>

<style scoped>
article {
  background-color: #474c56;
  border: 1px solid #474c56;
  margin-bottom: 20px;
  padding: 10px;
  width: auto;
  display: inline-block;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.16) 1px 8px 8px;
}

.left > div > article {
  border-radius: 5px 0px 5px 5px;
}

.right > div > article {
  border-radius: 0px 5px 5px 5px;
}

article > h2 {
  font-size: 20px;
  color: #d6d7d9;
  font-weight: 400;
  background-color: #474c56;
  text-align: center;
  padding-top: 3px;
}

article > img {
  max-height: 200px;
  width: auto;
  max-width: 40vw;
  display: block;
  margin: auto;
}
</style>
