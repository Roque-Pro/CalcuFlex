/**
*js-aula05, calculadora flex
*@autor - Roque Rafael
*/

var etanol, gasolina;//por fora da função, as
// variaveis se tornam globais

function calcular(){
    etanol = parseFloat(frmFlex.txtEtanol.value.replace(",","."));
    gasolina = parseFloat(frmFlex.txtGasolina.value.replace(",","."));

    if(etanol < 0.7 * gasolina){
        document.getElementById('status').src="img/gasnao.png";
    }else{
        document.getElementById('status').src="img/gasim.png";
    }   
}

function resetar(){
    document.getElementById('status').src="img/gas.png";     
}