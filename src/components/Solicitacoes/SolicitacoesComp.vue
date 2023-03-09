<template>
  <main>
    <SolicitacoesHeader :array="array" @select="limit = $event" />
    <div class="index">
          <div class="container">
            <div class="titulos">
              <span>ID</span>
              <div class="arrows">
                <span class="material-icons">arrow_drop_up</span>
                <span class="material-icons">arrow_drop_down</span>
              </div>
            </div>
            <div class="titulos">
              <span>Data</span>
              <div class="arrows">
                <span class="material-icons">arrow_drop_up</span>
                <span class="material-icons">arrow_drop_down</span>
              </div>
            </div>
            <div class="titulos">
              <span>Cidadão</span>
              <div class="arrows">
                <span class="material-icons">arrow_drop_up</span>
                <span class="material-icons">arrow_drop_down</span>
              </div>
            </div>
            <div class="titulos">
              <span>CPF</span>
              <div class="arrows">
                <span class="material-icons">arrow_drop_up</span>
                <span class="material-icons">arrow_drop_down</span>
              </div>
            </div>
            <div class="titulos">
              <span>Secretaria</span>
              <div class="arrows">
                <span class="material-icons">arrow_drop_up</span>
                <span class="material-icons">arrow_drop_down</span>
              </div>
            </div>
            <div class="titulos">
              <span>Situação</span>
              <div class="arrows">
                <span class="material-icons">arrow_drop_up</span>
                <span class="material-icons">arrow_drop_down</span>
              </div>
            </div>
          </div>
    </div>
    <div class="solicitacao">
      <div class="solicitacoes" v-for="item in array.slice(0,limit)" :key="item.id">
        <span>{{ item.id }}</span>
        <span>{{ item.Data }}</span>
        <span>{{ item.Nome }}</span>
        <span>{{ item.Cpf }}</span>
        <span>{{ item.Secretaria }}</span>
        <span>{{ item.Situacao }}</span>
      </div>
    </div>
    <div class="pageselect">
      a
    </div>
  </main>
</template>

<script>
import SolicitacoesHeader from "./SolicitacoesHeader.vue";
export default {
  name: "SolicitacoesComp",
  data() {
    return {
      limit: 5
    }
  },
  props: {
    array: Array,
  },
  components: {
    SolicitacoesHeader,
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
}
.solicitacao {
  width: 100%;
  max-height: 500px;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
}
.solicitacoes {
  min-height: 100px;
  padding: 0 min(2vw, 30px);
  border-bottom: 1px solid #e2e2e2;
  display: flex;
  align-items: center;
}
.solicitacoes span {
  flex: 1;
}
.index {
  background: var(--light);
  display: flex;
  height: 75px;
  width: 100%;
  border-bottom: 1px solid #e2e2e2;
}
.titulos {
  display: flex;
  align-items: center;
  flex: 1;
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
.pageselect {
  padding: 0 min(2vw, 30px);
  float: right;
}
</style>
