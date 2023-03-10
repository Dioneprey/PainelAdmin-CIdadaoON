<template>
  <main>
    <SolicitacoesHeader :array="array" @select="limit = $event" />
    <SolicitacoesTitulos :titles="titulos" />

    <div class="solicitacao">
      <div class="grid grid-template-columns-1" v-for="item in array.slice(0,limit)" :key="item.id">
        <span>{{ item.id }}</span>
        <span>{{ item.Data }}</span>
        <span>{{ item.Nome }}</span>
        <span>{{ item.Cpf }}</span>
        <span>{{ item.Secretaria }}</span>
        <span>{{ item.Título }}</span>
        <span>{{ item.Situacao }}</span>
        <span style="user-select: none;"><span class="material-icons">menu</span></span>
      </div>
    </div>
    <PaginationComp :pageatual="pageatual" :limit="limit"/>
  </main>
</template>

<script>
import SolicitacoesHeader from "./SolicitacoesHeader.vue";
import SolicitacoesTitulos from "./SolicitacoesTitulos.vue";
import PaginationComp from "./PaginationComp.vue";
export default {
  name: "SolicitacoesComp",
  data() {
    return {
      limit: 5,
      titulos: ["Data", "Cidadão", "CPF", "Secretaria", "Título", "Situação"],
      pageatual: 1
    }
  },
  props: {
    array: Array,
  },
  components: {
    SolicitacoesHeader,
    SolicitacoesTitulos,
    PaginationComp
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
}
.grid {
	display: grid;
  height: 75px;
  width: 100%;
  border-bottom: 1px solid #e2e2e2;
}
.grid-template-columns-1 {
  padding: var(--padding);
  min-height: 100px;
  align-items: center;
  border-bottom: 1px solid #e2e2e2;
	grid-template-columns: 6.5% 13.8% 14.5% 14.4% 13.8% 13.9% 14.6% 20px;

  &:hover {
    background: var(--light);
  }
}
.solicitacao {
  width: 100%;
  max-height: 500px;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
}


</style>
