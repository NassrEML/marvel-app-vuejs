<template>
  <div class="page">
    <Series msg="This is Series"/>
  </div>
</template>


<script>
// @ is an alias to /src
import Series from '@/components/Series.vue'

export default {
  name: 'series',
  components: {
    Series
  }
}
</script>