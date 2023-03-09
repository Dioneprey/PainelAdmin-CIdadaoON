<template>
  <main class="home-page">
    <HeaderComp :title="title" />
    <div class="container">
      <h1>Home</h1>
      <p>Página home</p>
    </div>
  </main>
</template>

<script>
import HeaderComp from '../components/Header/HeaderComp.vue'
export default {
  data() {
  return {
    title: "Home"
  }
},
components: {
  HeaderComp
}
}
</script>

<style Lang="scss">

</style>
