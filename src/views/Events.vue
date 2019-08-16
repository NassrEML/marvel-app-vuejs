<template>
  <div class="page">
    <Events msg="This is Events"/>
  </div>
</template>


<script>
// @ is an alias to /src
import Events from '@/components/Events.vue'

export default {
  name: 'events',
  components: {
    Events
  }
}
</script>