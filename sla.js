function mesAnterior(date, diff) {
  const d = new Date(date);
  d.setMonth(d.getMonth() + diff);
  return d;
}

function dataNosUltimosQuatroMeses(data) {
  const datas = [];
  for (let i = 1; i < 5; i++) {
    datas.push(mesAnterior(data, i * -1));
  }
  return datas;
}
const meses = ["Janeiro", "Fevereiro", "Março", "Abril","Junho", "Julho", "Agosto", "Setembro", "Outrubro", "Novembro","Dezembro"]


const hoje = new Date();
const ultimosQuatroMeses = dataNosUltimosQuatroMeses(hoje)
const dataString = ultimosQuatroMeses.toString()
console.log(dataString)


var reg = /([0-9]{4}\/[0-9]{1,2}\/[0-9]{1,2})/g;
var str = "Um texto com uma data aqui 01/01/2012 e mais uma aqui 2000/12/30";

ultimosQuatroMeses.map(data => {
    console.log(data.getMonth() + 1)
})

