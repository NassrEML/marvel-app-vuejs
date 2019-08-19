<template>
  <div class="creators">
    <h1>{{ msg }}</h1>
    
    <ul>
      <li v-for="(item,index) in search" :key="index">

        <span>ID del creador: {{item.id}}</span>
        ---
        <span>Nombre completo: {{item.fullName}}</span>
        ---
        <span>Nickname: {{item.suffix}}</span>
        ---
        <span>Primer nombre: {{item.firstName }}</span>
        ---
        <span>IMG: {{item.thumbnail.extension}}</span>
      </li>
    </ul>

    <div>
      <button v-on:click="getCreators(offsetValue-=5)">Previous page</button>
      <button v-on:click="getCreators(offsetValue+=5)">Next page</button>
    </div>

  </div>
</template>

<script>
import axios from "axios";

import urlQueryParams from "@/cosas/url";

export default {
  name: 'Creators',
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
    this.getCreators();
    this.offsetValue = 0
  },
  methods: {
    getCreators(index=null) {
      if(index == null){
        axios.get("https://gateway.marvel.com/v1/public/creators"+this.urlQueryParams+"&limit=5")
      .then(response => (this.search = response.data.data.results));
      }else{
        axios.get("https://gateway.marvel.com/v1/public/creators"+this.urlQueryParams+"&limit=5"+"&offset="+index)
      .then(response => (this.search = response.data.data.results));
      }
    }
  }
}
</script>