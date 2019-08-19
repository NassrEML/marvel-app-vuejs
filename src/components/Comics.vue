<template>
  <div class="comics">
    <h1>{{ msg }}</h1>

    <ul>
      <li v-for="(item,index) in search" :key="index">

        <span>ID del comic: {{item.id}}</span>
        ---
        <span>Titulo del comic: {{item.title}}</span>
        ---
        <span>IMG: {{item.thumbnail.extension}}</span>
      </li>
    </ul>

    <div>
      <button v-on:click="getComics(offsetValue-=5)">Previous page</button>
      <button v-on:click="getComics(offsetValue+=5)">Next page</button>
    </div>

  </div>
</template>

<script>
import axios from "axios";

import urlQueryParams from "@/cosas/url";

export default {
  name: 'Comics',
  data() {
    return {
      urlQueryParams: null,
      search: null,
      offsetValue: 0
    };
  },
  props: {
    msg: String
  },
  created() {
    this.urlQueryParams = urlQueryParams.returnHashCode();
    this.getComics();
    this.offsetValue = 0
  },
  methods: {
    getComics(index=null) {
      if(index == null){
        axios.get("https://gateway.marvel.com/v1/public/comics"+this.urlQueryParams+"&limit=5")
      .then(response => (this.search = response.data.data.results));
      }else{
        axios.get("https://gateway.marvel.com/v1/public/comics"+this.urlQueryParams+"&limit=5"+"&offset="+index)
      .then(response => (this.search = response.data.data.results));
      }
    }
  }
}
</script>