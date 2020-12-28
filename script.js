
function operacao(acao, value){
    
    
    if(acao === 'valor'){

        console.log(document.getElementById("visorL"));
        document.getElementById("visorL").value += value;
    }
    else{
        if(value === 'c'){
            document.getElementById("visorL").value = '';
        }
        if(value === '+' || value === '-' || value === '*' || value === '/'){
            document.getElementById("visorL").value += value;
        }
        
        if(value === '='){
            var calculo = eval(document.getElementById("visorL").value);
            document.getElementById("visorL").value = calculo;
        }
    }

}

