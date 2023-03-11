<template>
  <header>
    <div class="container">
        <div class="cards">
          <div class="card">
            <p>Pendentes</p>
            <span>{{ pendentes.length }}</span>
          </div>
          <div class="borderlinha"></div>
          <div class="card">
            <p>Em andamento</p>
            <span>{{ andamento.length}}</span>
          </div>
          <div class="borderlinha"></div>
          <div class="card">
            <p>Concluídas</p>
            <span>{{ concluidas.length }}</span>
          </div>
        </div>
    </div>
  </header>
</template>

<script setup>
const props = defineProps({
  items: Array,
})
const pendentes = props.items.filter(pendente => pendente.Situacao == "Pendente")
const andamento = props.items.filter(andamento => andamento.Situacao == "Andamento")
const concluidas = props.items.filter(concluidas => concluidas.Situacao == "Concluída")
</script>

<style lang="scss" scoped>
.cards {
  display: flex;
  align-items: center;
  justify-content: center;
  .borderlinha {
    width: 10%;
    height: 1px;
    background-color: var(--border-color);
  }
  .card {
  margin: 30px 0;
  width: 300px;
  height: 160px;

  box-shadow: 0 0 6px var(--border-color);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background: var(--w-light);
  border: 1px solid var(--border-color);
  border-radius: 15px;

  p {
    font-size: 22px;
    color: var(--grey);
  }
  span {
    font-size: 45px;
  }

  &:hover {
    border: 1px solid var(--blue);
    transition: 0.5s ease-out;

    p, span {
      color: var(--blue);
    }
  }
  }
}
</style>
