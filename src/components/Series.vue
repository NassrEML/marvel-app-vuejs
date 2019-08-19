<template>
  <div class="series">
    <h1>{{ msg }}</h1>

    <ul>
      <li v-for="(item,index) in search" :key="index">

        <span>ID de la serie: {{item.id}}</span>
        ---
        <span>Titulo de la serie: {{item.title}}</span>
        ---
        <span>"PEGI": {{item.rating}}</span>
      </li>
    </ul>

    <div>
      <button v-on:click="getSeries(offsetValue-=5)">Previous page</button>
      <button v-on:click="getSeries(offsetValue+=5)">Next page</button>
    </div>

  </div>
</template>

<script>
import axios from "axios";

import urlQueryParams from "@/cosas/url";

export default {
  name: 'Series',
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
    this.getSeries();
    this.offsetValue = 0
  },
  methods: {
    getSeries(index=null) {
      if(index == null){
        axios.get("https://gateway.marvel.com/v1/public/series"+this.urlQueryParams+"&limit=5")
      .then(response => (this.search = response.data.data.results));
      }else{
        axios.get("https://gateway.marvel.com/v1/public/series"+this.urlQueryParams+"&limit=5"+"&offset="+index)
      .then(response => (this.search = response.data.data.results));
      }
    }
  }
}
</script>