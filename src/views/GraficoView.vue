<template>
  <main>
    <HeaderComp :border="!false" :title="title" />
    <GraficoHeader :items="items"/>
    <GraficoBody :items="items"/>
  </main>
</template>

<script>
import HeaderComp from '../components/Header/HeaderComp.vue'
import GraficoHeader from '../components/Grafico/GraficoHeader.vue'
import GraficoBody from '../components/Grafico/GraficoBody.vue'
export default {
  data() {
    return {
      title: "Visão geral",
      items : [
          { id: 1, Data: "25/10/2022", Cpf: "12345678911", Nome: 'Dickerson Macdonald',  Secretaria: "Saúde", Título: "Falta de remédio" , Situacao: "Concluída" },
          { id: 2, Data: "22/11/2022", Cpf: "12345678911", Nome: 'Dickerson Macdonald',  Secretaria: "Saúde", Título: "Falta de remédio" , Situacao: "Pendente" },
          { id: 3, Data: "25/08/2022", Cpf: "12345678911", Nome: 'Dickerson Macdonald',  Secretaria: "Saúde", Título: "Falta de remédio" , Situacao: "Concluída" },
          { id: 4, Data: "23/10/2022", Cpf: "12345678911", Nome: 'Dickerson Macdonald',  Secretaria: "Saúde", Título: "Falta de remédio" , Situacao: "Pendente" },
          { id: 5, Data: "25/10/2022", Cpf: "12345678911", Nome: 'Dickerson Macdonald',  Secretaria: "Saúde", Título: "Falta de remédio" , Situacao: "Concluída" },
          { id: 6, Data: "25/10/2022", Cpf: "12345678911", Nome: 'Dickerson Macdonald',  Secretaria: "Saúde", Título: "Falta de remédio" , Situacao: "Concluída" },
          { id: 7, Data: "25/10/2022", Cpf: "12345678911", Nome: 'Dickerson Macdonald',  Secretaria: "Saúde", Título: "Falta de remédio" , Situacao: "Concluída" },
          { id: 8, Data: "25/10/2022", Cpf: "12345678911", Nome: 'Dickerson Macdonald',  Secretaria: "Saúde", Título: "Falta de remédio" , Situacao: "Andamento" },
          { id: 9, Data: "25/10/2022", Cpf: "12345678911", Nome: 'Dickerson Macdonald',  Secretaria: "Saúde", Título: "Falta de remédio" , Situacao: "Concluída" },
          { id: 10, Data: "25/10/2022", Cpf: "12345678911", Nome: 'Dickerson Macdonald', Secretaria: "Saúde", Título: "Falta de remédio" , Situacao: "Concluída" },
          { id: 11, Data: "25/10/2022", Cpf: "12345678911", Nome: 'Dickerson Macdonald', Secretaria: "Saúde", Título: "Falta de remédio" , Situacao: "Andamento" },
          { id: 12, Data: "25/10/2022", Cpf: "12345678911", Nome: 'Dickerson Macdonald', Secretaria: "Saúde", Título: "Falta de remédio" , Situacao: "Andamento" },
          { id: 13, Data: "25/10/2022", Cpf: "12345678911", Nome: 'Dickerson Macdonald', Secretaria: "Saúde", Título: "Falta de remédio" , Situacao: "Concluída" },
          { id: 14, Data: "25/10/2022", Cpf: "12345678911", Nome: 'Dickerson Macdonald', Secretaria: "Saúde", Título: "Falta de remédio" , Situacao: "Concluída" },
          { id: 15, Data: "25/10/2022", Cpf: "12345678911", Nome: 'Dickerson Macdonald', Secretaria: "Saúde", Título: "Falta de remédio" , Situacao: "Pendente" },
          { id: 16, Data: "25/10/2022", Cpf: "12345678911", Nome: 'Dickerson Macdonald', Secretaria: "Saúde", Título: "Falta de remédio" , Situacao: "Concluída" },
          { id: 17, Data: "25/10/2022", Cpf: "12345678911", Nome: 'Dickerson Macdonald', Secretaria: "Saúde", Título: "Falta de remédio" , Situacao: "Concluída" },
          { id: 18, Data: "25/10/2022", Cpf: "12345678911", Nome: 'Dickerson Macdonald', Secretaria: "Saúde", Título: "Falta de remédio" , Situacao: "Andamento" },
          { id: 19, Data: "25/10/2022", Cpf: "12345678911", Nome: 'Dickerson Macdonald', Secretaria: "Saúde", Título: "Falta de remédio" , Situacao: "Andamento" },
          { id: 20, Data: "25/10/2022", Cpf: "12345678911", Nome: 'Dickerson Macdonald', Secretaria: "Saúde", Título: "Falta de remédio" , Situacao: "Andamento" },
          { id: 21, Data: "25/10/2022", Cpf: "12345678911", Nome: 'Dickerson Macdonald', Secretaria: "Saúde", Título: "Falta de remédio" , Situacao: "Andamento" },
          { id: 22, Data: "25/10/2022", Cpf: "12345678911", Nome: 'Dickerson Macdonald', Secretaria: "Saúde", Título: "Falta de remédio" , Situacao: "Pendente" },
          { id: 23, Data: "25/10/2022", Cpf: "12345678911", Nome: 'Dickerson Macdonald', Secretaria: "Saúde", Título: "Falta de remédio" , Situacao: "Concluída" },
          { id: 24, Data: "25/10/2022", Cpf: "12345678911", Nome: 'Dickerson Macdonald', Secretaria: "Saúde", Título: "Falta de remédio" , Situacao: "Concluída" },
          { id: 25, Data: "25/10/2022", Cpf: "12345678911", Nome: 'Dickerson Macdonald', Secretaria: "Saúde", Título: "Falta de remédio" , Situacao: "Pendente" },
        ]
    }
  },
components: {
  HeaderComp,
  GraficoHeader,
  GraficoBody
}
}
</script>

<style lang="scss" scoped>
main {
  background: var(--light);
}
</style>
