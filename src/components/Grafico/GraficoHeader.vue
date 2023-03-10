<template>
  <header>
    <div class="container">
        <div class="cards">
          <div class="card">
            <p>Pendentes</p>
            <span>10</span>
          </div>
          <div class="card">
            <p>Em andamento</p>
            <span>15</span>
          </div>
          <div class="card">
            <p>Concluídas</p>
            <span>25</span>
          </div>
        </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "GraficoHeader"
}
</script>

<style lang="scss" scoped>
.cards {
  display: flex;

  .card {
  margin: 30px auto;
  width: 300px;
  height: 160px;

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
