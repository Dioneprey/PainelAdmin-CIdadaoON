export const data = {
  labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho'],
  datasets: [
    {
      label: 'Solicitações',
      backgroundColor: "#1c212d",
      data: [40, 39, 10, 40, 39, 80, 40],
    }
  ]
}

export const options = {
  responsive: true,
  maintainAspectRatio: false
}

/*

Criar uma função para pegar o mês atual, dois meses antes e depois e então, filtrar o array de solicitação pegando dados de cada mês

*/
