<template>
  <div class="page">
    <Stories msg="This is Stories"/>
  </div>
</template>


<script>
// @ is an alias to /src
import Stories from '@/components/Stories.vue'

export default {
  name: 'stories',
  components: {
    Stories
  }
}
</script>