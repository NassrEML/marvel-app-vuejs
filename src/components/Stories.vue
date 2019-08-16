<template>
  <div class="stories">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Stories',
  props: {
    msg: String
  }
}
</script>