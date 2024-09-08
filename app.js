let secao = document.getElementById("lista-de-personagens");

// Função para renderizar a lista de personagens
function renderizarPersonagens(personagens) {
    let resultados = "";

    for (let i of personagens) {
        if (i.nome == "Acheron") {
            resultados += `
            <a href="${i.link}" target="_blank">
                <img class="acheron" src="${i.imagem}" alt="${i.nome}">
                <span class="personagem-info"> ${i.nome} </span>
            </a>
            `;
        } else if (i.nome == "Trailblazer (Destruction)") {
            resultados += `
            <a href="${i.link}" target="_blank">
                <img class="destruction" src="${i.imagem}" alt="${i.nome}">
                <span class="personagem-info"> ${i.nome} </span>
            </a>
            `;
        } else if (i.nome == "Trailblazer (Preservation)") {
            resultados += `
            <a href="${i.link}" target="_blank">
                <img class="preservation" src="${i.imagem}" alt="${i.nome}">
                <span class="personagem-info"> ${i.nome} </span>
            </a>
            `;
        } else if (i.nome == "Trailblazer (Harmony)") {
            resultados += `
            <a href="${i.link}" target="_blank">
                <img class="harmony" src="${i.imagem}" alt="${i.nome}">
                <span class="personagem-info"> ${i.nome} </span>
            </a>
            `;
        } else if (i.nome == "Xueyi") {
            resultados += `
            <a href="${i.link}" target="_blank">
                <img class="xueyi" src="${i.imagem}" alt="${i.nome}">
                <span class="personagem-info"> ${i.nome} </span>
            </a>
            `;
        } else {
            resultados += `
            <a href="${i.link}" target="_blank">
                <img src="${i.imagem}" alt="${i.nome}">
                <span class="personagem-info"> ${i.nome} </span>
            </a>
            `;
        }
    }

    // Atualiza a seção com os resultados filtrados ou todos
    secao.innerHTML = resultados;
}

// Inicializa com todos os personagens
renderizarPersonagens(dados);

// Função de pesquisa em tempo real
document.getElementById("campo-pesquisa").addEventListener("input", function() {
    let campo = this.value.toLowerCase();
    let resultadosFiltrados = dados.filter(i => i.nome.toLowerCase().includes(campo));

    // Atualiza a lista de personagens com os resultados filtrados
    renderizarPersonagens(resultadosFiltrados);
    }
);

// Seleciona todas as imagens dentro das listas de elementos e caminhos
const elementos = document.querySelectorAll('.elementos img');
const caminhos = document.querySelectorAll('.caminhos img');

// Função para desmarcar todos os elementos de um grupo
function desmarcarGrupo(grupo) {
    grupo.forEach(item => item.classList.remove('selecionado'));
}

// Função para lidar com o clique nos itens
function mudarSelecao(img, tipo) {
    const isSelecionado = img.classList.contains('selecionado');

    if (isSelecionado) {
        img.classList.remove('selecionado');
    } else {
        // Se for um novo filtro selecionado, desmarca todos do mesmo grupo
        if (tipo === 'elemento') {
            desmarcarGrupo(elementos);
        } else {
            desmarcarGrupo(caminhos);
        }
        img.classList.add('selecionado');
    }

    // Atualiza a lista de personagens com base nos filtros selecionados
    atualizarListaDePersonagens();
}

// Adiciona evento de clique para os elementos
elementos.forEach(img => {
    img.addEventListener('click', () => {
        mudarSelecao(img, 'elemento');
    });
});

// Adiciona evento de clique para os caminhos
caminhos.forEach(img => {
    img.addEventListener('click', () => {
        mudarSelecao(img, 'caminho');
    });
});

// Função para obter os filtros selecionados
function obterFiltrosSelecionados() {
    const elementosSelecionados = Array.from(elementos)
        .filter(img => img.classList.contains('selecionado'))
        .map(img => img.alt);
    
    const caminhosSelecionados = Array.from(caminhos)
        .filter(img => img.classList.contains('selecionado'))
        .map(img => img.alt);

    return {
        elementos: elementosSelecionados,
        caminhos: caminhosSelecionados
    };
}

// Função para atualizar a lista de personagens com base nos filtros selecionados
function atualizarListaDePersonagens() {
    const filtros = obterFiltrosSelecionados();

    // Filtra personagens de acordo com os filtros selecionados
    let resultadosFiltrados = dados.filter(personagem => {
        let correspondeElemento = filtros.elementos.length === 0 ||
                                  filtros.elementos.includes(personagem.elemento);
        let correspondeCaminho = filtros.caminhos.length === 0 ||
                                 filtros.caminhos.includes(personagem.caminho);
        return correspondeElemento && correspondeCaminho;
    });

    // Atualiza a seção com os resultados filtrados
    renderizarPersonagens(resultadosFiltrados);
}