<template>
  <main>
    <HeaderComp :title="title" />
    <GraficoHeader />
  </main>
</template>

<script>
import HeaderComp from '../components/Header/HeaderComp.vue'
import GraficoHeader from '../components/Grafico/GraficoHeader.vue'
export default {
  data() {
    return {
      title: "Visão geral"
    }
  },
components: {
  HeaderComp,
  GraficoHeader
}
}
</script>

<style lang="scss" scoped>
main {
  background: var(--light);
}
</style>
