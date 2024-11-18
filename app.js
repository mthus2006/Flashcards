function criaCartao(categoria, pergunta, resposta) {
    let container = document.getElementById('container')
    let cartao = document.createElement('article')
    cartao.className = 'cartao'

    cartao.innerHTML = `
    <div class="cartao__conteudo">
                    <h3>Aleatório</h3>
                    <div class="cartao__conteudo__pergunta">
                        <p>Quem roubou mais que o Lula?</p>
                    </div>
                    <div class="cartao__conteudo__resposta">
                        <p>Ninguém.</p>
                    </div>
    `
    container.appendChild(cartao)
}