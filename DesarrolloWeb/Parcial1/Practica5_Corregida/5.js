let valor = "";
let operador = "";
let primervalor = 0;
function numclic(num){
    valor += num;
    console.log(valor)
    document.getElementById("tablero").innerHTML = valor + "";
}
function operaratorclic(op){
    operador = op;
    primervalor = valor;
    valor = "";
    document.getElementById("tablero").innerHTML = valor +"";
}

function igualclic(){
        switch(operador){
            case '+':
                valor = parseFloat(valor) + parseFloat(primervalor);
                break;
            case '-':
                valor = parseFloat(valor) - parseFloat(primervalor);
                break;
            case 'X':
                valor = parseFloat(valor) * parseFloat(primervalor);
                break;
            case '/':
                valor = parseFloat(valor) / parseFloat(primervalor);
                break;
        }

}