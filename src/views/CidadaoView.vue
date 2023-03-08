<template>
  <main class="usuario-page">
    <HeaderComp :title="title" />
    <div class="container">
      <h1>Cidadãos</h1>
      <p>Página cidadãos</p>
    </div>
  </main>
</template>

<script>
import HeaderComp from '../components/HeaderComp.vue'
export default {
  data() {
  return {
    title: "Cidadãos"
  }
},
components: {
  HeaderComp
}
}
</script>

<style Lang="scss">

</style>
