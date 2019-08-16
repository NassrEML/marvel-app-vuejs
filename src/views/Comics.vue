<template>
  <div class="page">
    <Comics msg="This is Comics"/>
  </div>
</template>


<script>
// @ is an alias to /src
import Comics from '@/components/Comics.vue'

export default {
  name: 'comics',
  components: {
    Comics
  }
}
</script>