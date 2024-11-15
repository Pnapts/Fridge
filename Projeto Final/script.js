// Permite arrastar os cards entre as colunas
function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    var card = document.getElementById(data);
    ev.target.appendChild(card);
}

// Função para criar novos cards
function createCard(columnId) {
    // Gerar ID único para o card
    const cardId = 'card-' + Date.now();

    // Criar o elemento do card
    const card = document.createElement('div');
    card.setAttribute('id', cardId);
    card.setAttribute('class', 'card');
    card.setAttribute('draggable', 'true');
    card.setAttribute('ondragstart', 'drag(event)');

    // Adicionar inputs ao card
    const title = document.createElement('input');
    title.setAttribute('type', 'text');
    title.setAttribute('placeholder', 'Atividade');
    
    const responsavel = document.createElement('input');
    responsavel.setAttribute('type', 'text');
    responsavel.setAttribute('placeholder', 'Responsável');
    
    const dataLimite = document.createElement('input');
    dataLimite.setAttribute('type', 'date');

    // Adicionar os inputs ao card
    card.appendChild(title);
    card.appendChild(responsavel);
    card.appendChild(dataLimite);

    // Adicionar o card à coluna
    const column = document.getElementById(columnId);
    column.appendChild(card);
}
