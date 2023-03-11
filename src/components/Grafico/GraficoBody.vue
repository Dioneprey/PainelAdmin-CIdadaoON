<template>
  <main>
    <div class="container">
      <section>
        <div class="grafico">
          <GraficoComp/>
        </div>
        <div class="cards">
          <div class="card">
            <p>Resolvidos</p>
            <span>{{resolvidos.length}}</span>
          </div>
          <div class="card">
            <p>Recebidos</p>
            <span>{{items.length}}</span>
          </div>
          <div class="card">
            <p>Taxa de resolução</p>
            <span>{{porcentagem}}%</span>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>

<script setup>
import GraficoComp from "./GraficoComp.vue"
const props = defineProps({
  items: Array,
})
const resolvidos = props.items.filter(resolvido => resolvido.Situacao == "Concluída")
const porcentagem = (resolvidos.length / props.items.length) * 100
</script>

<style lang="scss" scoped>

main {
  overflow-y: scroll;
}
section {
  height: 60vh;
  background: var(--w-light);
  box-shadow: 0 0 6px var(--border-color);

  border: 1px solid var(--border-color);
  border-radius: 15px;

  display: flex;

  .grafico {
    flex: 1.5;
    border-right: 1px solid var(--border-color);
    padding: 30px;
  }

  .cards {
    display: flex;
    flex-direction: column;

    flex: 0.5;
    .card {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;

      flex: 1;
      border-bottom: 1px solid var(--border-color);

      p {
        font-size: 23px;
        color: var(--grey);
      }
      span {
        font-weight: bold;
        font-size: 30px;
      }
    }
  }
}
</style>
