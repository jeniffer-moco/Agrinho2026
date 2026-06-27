// 1. Função para o Modo Escuro
function toggleTheme() {
    document.body.classList.toggle('dark-mode');
}

// 2. Função que usa variável para personalizar o texto da tela
function boasVindas() {
    let nome = document.getElementById('userName').value; // Variável guardando o nome
    
    if (nome !== "") {
        document.getElementById('greetingMessage').innerText = "Olá, " + nome + "! Vamos proteger o meio ambiente.";
    }
}

// 3. Função que muda o texto do painel de preços com base no clique
function verPreco(tecnologia) {
    let titulo = document.getElementById('titulo-preco');
    let texto = document.getElementById('texto-preco');

    if (tecnologia === 'drone') {
        titulo.innerText = "Custo do Drone";
        texto.innerText = "Um modelo básico para pulverização custa a partir de R$ 15.000,00.";
    } 
    else if (tecnologia === 'ia') {
        titulo.innerText = "Custo da Inteligência Artificial";
        texto.innerText = "Geralmente funciona por assinaturas mensais a partir de R$ 500,00.";
    } 
    else if (tecnologia === 'sensor') {
        titulo.innerText = "Custo dos Sensores de Solo";
        texto.innerText = "Cada estação conectada custa em média R$ 1.500,00.";
    }
}