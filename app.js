
const form = document.getElementById('some-form')
form.addEventListener('submit',(e) => {
    e.preventDefault();
   // console.log('Deu certo form');
})


 const calcular = document.getElementById('botao');

 calcular.addEventListener('click', () =>{
    converterMoeda();
});




async function converterMoeda() {
   var url = 'https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoDolarPeriodo(dataInicial=@dataInicial,dataFinalCotacao=@dataFinalCotacao)?@dataInicial=%2706-10-2023%27&@dataFinalCotacao=%2706-17-2023%27&$top=1&$orderby=dataHoraCotacao%20desc&$format=json&$select=cotacaoCompra,dataHoraCotacao' 
 //codigo js puro 
var apiDolar = await fetch(url,  {
      method: 'GET'});
    //.then(dados => dados.json())
    //.then(console.log)
   const resultado = await apiDolar.json();
   
   const valorDolar = resultado['value'][0]["cotacaoCompra"];
  const data = resultado['value'][0]["dataHoraCotacao"];
  
var mostraTela = document.querySelector("h2");
  var dataTela = document.querySelector("h3");
var valorReal = document.getElementById('IDvalor');
var valorRealFinal = valorReal.value;
  
  var resultadoDolar = (valorRealFinal/valorDolar.toFixed(2) );
  
 var finalResult = resultadoDolar.toFixed(2);
  
  mostraTela.innerHTML = `O valor em dolar é $<span style="color:black;"> ${finalResult}</span> `;
  dataTela.innerHTML = `
  Data da consulta: <span style="color:black;">${data.substring(0, data.length - 12)}</span>
   <h3> Hora da consulta: <span style="color:black;"> ${data.substring(10, data.length -4)} </span></h3>
  `;
   valorReal.value =  "";
  // console.log('Deu certo api');
    };
 
//converterMoeda();

/*
async function converterMoeda() {
   var url = 'https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoDolarPeriodo(dataInicial=@dataInicial,dataFinalCotacao=@dataFinalCotacao)?@dataInicial=%2706-10-2023%27&@dataFinalCotacao=%2706-17-2023%27&$top=1&$orderby=dataHoraCotacao%20desc&$format=json&$select=cotacaoCompra,dataHoraCotacao' 
 //codigo js puro 
var apiDolar = await fetch(url,  {
      method: 'GET'});
var resu = await apiDolar.json();
  console.log(resu);
  
};
converterMoeda()*/