<template>
  <div class="series">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Series',
  props: {
    msg: String
  }
}
</script>