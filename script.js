// Função para o Modo Escuro
function toggleTheme() {
    document.body.classList.toggle('dark-mode');
}

// Função de Boas-Vindas
function boasVindas() {
    let nome = document.getElementById('userName').value;
    
    if (nome !== "") {
        document.getElementById('greetingMessage').innerText = "Olá, " + nome + "! Que bom que você chegou! As tecnologias do agro te esperam por aqui!";
    }
}

// Função que mostra o preço
function verPreco(tecnologia) {
    // Esconde as caixas de texto completa e mostra apenas o necessário
    document.getElementById('preco-drone').style.display = "none";
    document.getElementById('preco-ia').style.display = "none";
    document.getElementById('preco-sensor').style.display = "none";

    // Mostra e adiciona o texto com parágrafos apenas na caixa clicada
    if (tecnologia === 'drone') {
        let caixa = document.getElementById('preco-drone');
        let texto = document.getElementById('texto-drone');
        
        texto.innerHTML = "<p>Um modelo básico ou de entrada para pulverização está custando em torno de R$ 30.000 a R$ 50.000. São ótimos drones para pequenas propriedades.</p>" + 
                          "<p>Já os modelos maiores, usados em grandes plantações no Paraná, podem passar de R$ 150.000,00.</p>";
        
        caixa.style.display = "block";
    } 
    else if (tecnologia === 'ia') {
        let caixa = document.getElementById('preco-ia');
        let texto = document.getElementById('texto-ia');
        
        texto.innerHTML = "<p>Os sistemas de Inteligência Artificial para análise de lavoura geralmente funcionam por assinaturas mensais ou anuais.</p>" + 
                          "<p>Os planos básicos para pequenos produtores custam a partir de R$ 500 por mês.</p>";
        
        caixa.style.display = "block";
    } 
    else if (tecnologia === 'sensor') {
        let caixa = document.getElementById('preco-sensor');
        let texto = document.getElementById('texto-sensor');
        
        texto.innerHTML = "<p>Cada estação conectada com sensores de umidade e temperatura custa em média R$ 1.500.</p>" + 
                          "<p>Para cobrir uma propriedade inteira, o valor total depende de quantas peças o agricultor vai precisar instalar na terra.</p>";
        
        caixa.style.display = "block";
    }
}