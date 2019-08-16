<template>
  <div class="comics">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Comics',
  props: {
    msg: String
  }
}
</script>