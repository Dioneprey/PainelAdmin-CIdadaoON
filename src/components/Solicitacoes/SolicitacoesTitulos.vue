<template>
  <main>
      <div class="grid grid-template-columns-1">
        <div style="flex: 0.9;" class="titulos">
          <span>ID</span>
          <div class="arrows">
            <span class="material-icons">arrow_drop_up</span>
            <span class="material-icons">arrow_drop_down</span>
          </div>
        </div>
        <div class="titulos">
          <span>{{titles[0]}}</span>
          <div class="arrows">
            <span class="material-icons">arrow_drop_up</span>
            <span class="material-icons">arrow_drop_down</span>
          </div>
        </div>
        <div class="titulos">
          <span>{{titles[1]}}</span>
          <div class="arrows">
            <span class="material-icons">arrow_drop_up</span>
            <span class="material-icons">arrow_drop_down</span>
          </div>
        </div>
        <div class="titulos">
          <span>{{titles[2]}}</span>
          <div class="arrows">
            <span class="material-icons">arrow_drop_up</span>
            <span class="material-icons">arrow_drop_down</span>
          </div>
        </div>
        <div class="titulos">
          <span>{{titles[3]}}</span>
          <div class="arrows">
            <span class="material-icons">arrow_drop_up</span>
            <span class="material-icons">arrow_drop_down</span>
          </div>
        </div>
        <div class="titulos">
          <span>{{titles[4]}}</span>
          <div class="arrows">
            <span class="material-icons">arrow_drop_up</span>
            <span class="material-icons">arrow_drop_down</span>
          </div>
        </div>
        <div class="titulos">
          <span>{{titles[5]}}</span>
          <div class="arrows">
            <span class="material-icons">arrow_drop_up</span>
            <span class="material-icons">arrow_drop_down</span>
          </div>
        </div>
        <div style="flex: 1;" class="titulos">
          <span>Ações</span>
          <div class="arrows">
            <span class="material-icons">arrow_drop_up</span>
            <span class="material-icons">arrow_drop_down</span>
          </div>
        </div>
      </div>
  </main>
</template>

<script>
export default {
  name: "SolicitacoesTitulos",
  props: {
    titles: Array,
  }
};
</script>

<style lang="scss" scoped>
.grid {
	display: grid;
  user-select: none;
  background: var(--light);
  height: 75px;
  width: 100%;
  border-bottom: 1px solid #e2e2e2;
}

/* 100px é o valor total, ignora conteúdo, margem e etc. Respeita apenas o min-width do item.*/
.grid-template-columns-1 {
  padding: var(--padding);
	grid-template-columns: 6.5% 13.8% 14.6% 13.6% 13.8% 13.9% 13.6% 20px;
}
.titulos {
  display: flex;
  align-items: center;
  flex: 2;
}
.arrows {
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  span {
    color: var(--grey);
    height: 10px;
    font-size: 25px;
  }
}
</style>
