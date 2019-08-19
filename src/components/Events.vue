<template>
  <div class="events">
    <h1>{{ msg }}</h1>

    <ul>
      <li v-for="(item,index) in search" :key="index">

        <span>ID del evento: {{item.id}}</span>
        ---
        <span>Titulo del evento: {{item.title}}</span>
        ---
        <span>Fecha de inicio: {{item.start}}</span>
        ---
        <span>Fecha de finalización: {{item.end}}</span>
      </li>
    </ul>

    <div>
      <button v-on:click="getEvents(offsetValue-=5)">Previous page</button>
      <button v-on:click="getEvents(offsetValue+=5)">Next page</button>
    </div>

  </div>
</template>

<script>
import axios from "axios";

import urlQueryParams from "@/cosas/url";

export default {
  name: 'Events',
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
    this.getEvents();
    this.offsetValue = 0
  },
  methods: {
    getEvents(index=null) {
      if(index == null){
        axios.get("https://gateway.marvel.com/v1/public/events"+this.urlQueryParams+"&limit=5")
      .then(response => (this.search = response.data.data.results));
      }else{
        axios.get("https://gateway.marvel.com/v1/public/events"+this.urlQueryParams+"&limit=5"+"&offset="+index)
      .then(response => (this.search = response.data.data.results));
      }
    }
  }
}
</script>