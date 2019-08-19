<template>
  <div class="characters">
    <h1>{{ msg }}</h1>

    <section @change="onChange($event)">
      <h3>Ordenar</h3>
      <input type="radio" v-model="order" value="name" />name
      <input type="radio" v-model="order" value="modified" />modified
      <br />
      <span>Está ordenado por: {{order}}</span>
    </section>

    <div class="container">
      <div class="card" v-for="(item,index) in search" :key="index">
        <span>{{item.name}}</span>
        <div class="img-container">
          <img v-bind:src="item.thumbnail.path + '.' + item.thumbnail.extension" />
        </div>
        <button v-on:click="getMoreInfo(item.id)">More info</button>
      </div>
    </div>

    <div>
      <button v-on:click="getCharacters(offsetValue-=5)">Previous page</button>
      <button v-on:click="getCharacters(offsetValue+=5)">Next page</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";

import urlQueryParams from "@/cosas/url";

export default {
  name: "Characters",
  data() {
    return {
      urlQueryParams: null,
      search: null,
      offsetValue: 0,
      url: "",
      order:""
    };
  },
  props: {
    msg: String
  },
  created() {
    this.urlQueryParams = urlQueryParams.returnHashCode();
    this.getCharacters();
    this.offsetValue = 0;
  },
  methods: {
    getCharacters(index=null) {
      if (index == null) {
        axios
          .get(
            "https://gateway.marvel.com/v1/public/characters" +
              this.urlQueryParams +
              "&limit=5"+"&orderBy="+this.order
          )
          .then(response => (this.search = response.data.data.results));
      } else {
        axios
          .get(
            "https://gateway.marvel.com/v1/public/characters" +
              this.urlQueryParams +
              "&limit=5" +
              "&offset=" +
              index + "&orderBy="+this.order
          )
          .then(response => (this.search = response.data.data.results));
      }
    },
    getMoreInfo(id) {
      axios
        .get(
          "https://gateway.marvel.com/v1/public/characters/" +
            id +
            this.urlQueryParams
        )
        .then(
          response => ((this.url = response.data.data.results[0].urls[0].url),(window.open(this.url, "_blank")))
        );
    },
    onChange($event){
      this.getCharacters()
    }
  }
};
</script>

<style>
.container {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  padding: 0;
}

.card {
  border-radius: 0.25rem;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding: 5px;
}

.img-container {
  width: 200px;
  height: 200px;
}

/* resize images */
.img-container img {
  width: 100%;
  height: auto;
}
</style>