<template>
  <div class="events">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Events',
  props: {
    msg: String
  }
}
</script>