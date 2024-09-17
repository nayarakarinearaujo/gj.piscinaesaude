// Classe responsável por gerenciar o carrossel de imagens
class Carousel {
    constructor() {
        this.slides = document.querySelectorAll('.carousel-slide'); // Seleciona todos os slides
        this.currentSlide = 0; // Inicializa o índice do slide atual
        this.intervalId = null; // Inicializa o ID do intervalo para controle de animação
    }

    // Método para mostrar o próximo slide
    nextSlide() {
        this.slides[this.currentSlide].classList.remove('show'); // Remove a classe 'show' do slide atual
        this.currentSlide = (this.currentSlide + 1) % this.slides.length; // Atualiza o índice do próximo slide
        this.slides[this.currentSlide].classList.add('show'); // Adiciona a classe 'show' ao próximo slide
    }

    // Método para iniciar a animação do carrossel
    startCarousel() {
        this.intervalId = setInterval(() => this.nextSlide(), 2000); // Chama nextSlide a cada 2 segundos
    }

    // Método para parar a animação do carrossel
    stopCarousel() {
        clearInterval(this.intervalId); // Limpa o intervalo para interromper a animação
    }
}

// Classe responsável por lidar com o formulário de contato
class FormHandler {
    constructor() {
        this.phoneNumber = "5519999606402"; // Número de telefone para o qual enviar a mensagem
        this.form = document.getElementById("contatoForm"); // Obtém o formulário de contato
        this.form.addEventListener("submit", this.handleFormSubmit.bind(this)); // Adiciona um ouvinte de evento para o envio do formulário
    }

    // Método para enviar a mensagem para o WhatsApp
    sendToWhatsApp(message) {
        const whatsappMessage = encodeURIComponent(message); // Codifica a mensagem para o formato de URL
        window.open("https://api.whatsapp.com/send?phone=" + this.phoneNumber + "&text=" + whatsappMessage); // Abre a URL no WhatsApp Web
    }

    // Método para lidar com o envio do formulário
    handleFormSubmit(event) {
        event.preventDefault(); // Impede o comportamento padrão de envio do formulário

        // Obtém os valores dos campos do formulário
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;
        const message = document.getElementById("message").value;

        // Constrói a mensagem a ser enviada
        const whatsappMessage = `Nome: ${name} E-mail: ${email} Telefone: ${phone} A Mensagem: ${message}`;

        // Envia a mensagem para o WhatsApp
        this.sendToWhatsApp(whatsappMessage);
    }
}

// Evento que ocorre quando o DOM está completamente carregado
document.addEventListener('DOMContentLoaded', () => {
    // Cria uma instância da classe Carousel e inicia a animação
    const carousel = new Carousel();
    carousel.startCarousel();

    // Cria uma instância da classe FormHandler para lidar com o formulário de contato
    const formHandler = new FormHandler();
});

//Scroll suave do navbar para section

function intitScrollSuave() {

    const internalLinks = document.querySelectorAll('.js-menu a[href^="#"]');

    function scrollToSection(event) {
        event.preventDefault();
        const href = event.currentTarget.getAttribute("href");
        const section = document.querySelector(href);

        section.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    }

        internalLinks.forEach((link) => {
            link.addEventListener("click", scrollToSection);
        });
    }


intitScrollSuave();
