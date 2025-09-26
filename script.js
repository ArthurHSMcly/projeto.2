document.addEventListener('DOMContentLoaded', () => {
    // 1. Funcionalidade do Menu Responsivo (Hambúrguer)

    // Precisamos de um elemento para abrir/fechar (o ícone)
    // E precisamos de uma forma de controlar a visibilidade da lista de links (a navegação)

    // Para isso, vamos fazer uma pequena modificação no HTML/CSS
    // Adicionaremos um botão de menu no HTML (para mobile)
    // E o CSS precisará de regras para esconder/mostrar este menu

    // --- Se você quiser o menu responsivo, adicione o seguinte no seu HTML (`index.html`), 
    // --- dentro da tag <header class="navbar">:

    // <button class="menu-toggle" aria-label="Abrir Menu">
    //     <i class="fas fa-bars"></i> 
    // </button>


    const navbar = document.querySelector('.navbar');
    const navMenu = document.querySelector('.navbar nav ul');
    
    // NOTA: Se você adicionar o botão acima, descomente o bloco a seguir:
    /*
    const menuToggle = document.querySelector('.menu-toggle');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            // Alterna a classe 'active' no menu e na navbar para abrir/fechar
            navMenu.classList.toggle('active');
            navbar.classList.toggle('menu-open');
        });
    }
    */


    // 2. Funcionalidade de Animação na Rolagem (opcional, mas adiciona um toque moderno)

    const mainTitle = document.querySelector('.main-title');
    const description = document.querySelector('.description');
    const heroButtons = document.querySelector('.hero-buttons');
    
    // Adicionar um pequeno atraso e efeito de entrada ao carregar a página
    setTimeout(() => {
        mainTitle.style.opacity = '1';
        mainTitle.style.transform = 'translateY(0)';
    }, 300);

    setTimeout(() => {
        description.style.opacity = '1';
        description.style.transform = 'translateY(0)';
    }, 600);

    setTimeout(() => {
        heroButtons.style.opacity = '1';
        heroButtons.style.transform = 'translateY(0)';
    }, 900);
});

// --- Instruções CSS para as animações de entrada ---
// Para que as animações de entrada acima funcionem, você precisa adicionar
// as seguintes regras iniciais no seu arquivo style.css:

/* .main-title, .description, .hero-buttons {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.8s ease-out, transform 0.8s ease-out;
}
*/
