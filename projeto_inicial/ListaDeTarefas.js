// criamos uma arrow function
const criarTarefa = (evento) => {

    evento.preventDefault();
    const lista = document.querySelector('[data-list]')
    const input = document.querySelector('[data-form-input]');
    const valor = input.value;

    const tarefa = document.createElement('li');
    //task é a classe do css quevai por o efeito
    tarefa.classList.add('task')
    const conteudo = `<p class="content">${valor}</p>`;
    tarefa.innerHTML = conteudo;

    tarefa.appendChild(BotaoConclui());
    lista.appendChild(tarefa);
    input.value = "";
};



// uma tarefa ficar em baixo da outra tem relação com  o appendchild 

const botao = document.querySelector('[data-form-button]');
botao.addEventListener('click', criarTarefa);


const BotaoConclui = () => {

    const botaoConclui = document.createElement('button');

    botaoConclui.addEventListener('click', () => {
        botaoConclui.classList.add('check-button')
        console.log('cliquei de novo!!');
    })

    return botaoConclui;
}