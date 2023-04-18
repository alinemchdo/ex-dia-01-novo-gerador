import validador  from  'validator' ;
import  './style.css';

const campo01 = document.querySelector('.campo01');
const campo02 = document.querySelector('.campo02');
const btn = document.querySelector('button');
const mensage = document.querySelector('.mensagem')



btn.addEventListener('click', (event) => {
    event.preventDefault

    const campo = {
        cpf: validador.isTaxID(campo01.value,'pt-BR'),
        email:validador.isEmail(campo01.value),
    }
    mensage.innerHTML = `A validacao retornou ${campo[seletor.value]}`;
});