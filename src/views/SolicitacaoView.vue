<template>
  <main class="usuario-page">
    <HeaderComp :title="title" />
    <SecondHeaderComp />
      <div>
       <SolicitacoesComp :array="items" />
      </div>

  </main>
</template>

<script>
import HeaderComp from '../components/Header/HeaderComp.vue'
import SecondHeaderComp from '../components/Header/SecondHeaderComp.vue'
import SolicitacoesComp from '../components/Solicitacoes/SolicitacoesComp.vue'
export default {
  data() {
  return {
    title: "Solicitações",
    items: [
          { id: 1, Data: "25/10/2022", Cpf: "12345678911", Nome: 'Dickerson Macdonald', Secretaria: "Saúde", Situacao: "Pendente" },
          { id: 2, Data: "22/11/2022", Cpf: "12345678911", Nome: 'Dickerson Macdonald', Secretaria: "Saúde", Situacao: "Andamento" },
          { id: 3, Data: "25/08/2022", Cpf: "12345678911", Nome: 'Dickerson Macdonald', Secretaria: "Saúde", Situacao: "Andamento" },
          { id: 4, Data: "23/10/2022", Cpf: "12345678911", Nome: 'Dickerson Macdonald', Secretaria: "Saúde", Situacao: "Pendente" },
          { id: 5, Data: "25/10/2022", Cpf: "12345678911", Nome: 'Dickerson Macdonald', Secretaria: "Saúde", Situacao: "Pendente" },
          { id: 6, Data: "25/10/2022", Cpf: "12345678911", Nome: 'Dickerson Macdonald', Secretaria: "Saúde", Situacao: "Pendente" },
          { id: 7, Data: "25/10/2022", Cpf: "12345678911", Nome: 'Dickerson Macdonald', Secretaria: "Saúde", Situacao: "Concluída" },
          { id: 8, Data: "25/10/2022", Cpf: "12345678911", Nome: 'Dickerson Macdonald', Secretaria: "Saúde", Situacao: "Concluída" },
          { id: 9, Data: "25/10/2022", Cpf: "12345678911", Nome: 'Dickerson Macdonald', Secretaria: "Saúde", Situacao: "Pendente" },
          { id: 10, Data: "25/10/2022", Cpf: "12345678911", Nome: 'Dickerson Macdonald', Secretaria: "Saúde", Situacao: "Andamento" },
          { id: 11, Data: "25/10/2022", Cpf: "12345678911", Nome: 'Dickerson Macdonald', Secretaria: "Saúde", Situacao: "Andamento" },
          { id: 12, Data: "25/10/2022", Cpf: "12345678911", Nome: 'Dickerson Macdonald', Secretaria: "Saúde", Situacao: "Pendente" },
          { id: 13, Data: "25/10/2022", Cpf: "12345678911", Nome: 'Dickerson Macdonald', Secretaria: "Saúde", Situacao: "Pendente" },
          { id: 14, Data: "25/10/2022", Cpf: "12345678911", Nome: 'Dickerson Macdonald', Secretaria: "Saúde", Situacao: "Concluída" },
          { id: 15, Data: "25/10/2022", Cpf: "12345678911", Nome: 'Dickerson Macdonald', Secretaria: "Saúde", Situacao: "Concluída" },
          { id: 16, Data: "25/10/2022", Cpf: "12345678911", Nome: 'Dickerson Macdonald', Secretaria: "Saúde", Situacao: "Pendente" },
          { id: 17, Data: "25/10/2022", Cpf: "12345678911", Nome: 'Dickerson Macdonald', Secretaria: "Saúde", Situacao: "Pendente" },
          { id: 18, Data: "25/10/2022", Cpf: "12345678911", Nome: 'Dickerson Macdonald', Secretaria: "Saúde", Situacao: "Pendente" },
          { id: 19, Data: "25/10/2022", Cpf: "12345678911", Nome: 'Dickerson Macdonald', Secretaria: "Saúde", Situacao: "Andamento" },
          { id: 20, Data: "25/10/2022", Cpf: "12345678911", Nome: 'Dickerson Macdonald', Secretaria: "Saúde", Situacao: "Andamento" },
          { id: 21, Data: "25/10/2022", Cpf: "12345678911", Nome: 'Dickerson Macdonald', Secretaria: "Saúde", Situacao: "Pendente" },
          { id: 22, Data: "25/10/2022", Cpf: "12345678911", Nome: 'Dickerson Macdonald', Secretaria: "Saúde", Situacao: "Concluida" },
          { id: 23, Data: "25/10/2022", Cpf: "12345678911", Nome: 'Dickerson Macdonald', Secretaria: "Saúde", Situacao: "Concluida" },
          { id: 24, Data: "25/10/2022", Cpf: "12345678911", Nome: 'Dickerson Macdonald', Secretaria: "Saúde", Situacao: "Concluida" },
          { id: 25, Data: "25/10/2022", Cpf: "12345678911", Nome: 'Dickerson Macdonald', Secretaria: "Saúde", Situacao: "Concluida" },
        ]
  }
},
components: {
  HeaderComp,
  SecondHeaderComp,
  SolicitacoesComp
}
}
</script>

<style Lang="scss" scoped>

</style>
