// Classe responsável por gerenciar o carrossel de imagens
class Carousel {
    constructor() {
        this.slides = document.querySelectorAll('.carousel-slide'); 
        this.currentSlide = 0; 
        this.intervalId = null; 
    }

    // Método para mostrar o próximo slide
    nextSlide() {
        this.slides[this.currentSlide].classList.remove('show'); 
        this.currentSlide = (this.currentSlide + 1) % this.slides.length; 
        this.slides[this.currentSlide].classList.add('show'); 
    }

    // Método para iniciar a animação do carrossel
    startCarousel() {
        this.intervalId = setInterval(() => this.nextSlide(), 2000); 
    }

    // Método para parar a animação do carrossel
    stopCarousel() {
        clearInterval(this.intervalId); 
    }
}


// Função para enviar a mensagem para o WhatsApp
function sendToWhatsApp(message) {
    const phoneNumber = "5519999606402"; 
    const whatsappMessage = encodeURIComponent(message); 
    window.open(`https://api.whatsapp.com/send?phone=${phoneNumber}&text=${whatsappMessage}`); 
}

// Função para lidar com o envio do formulário
function handleFormSubmit(event) {
    event.preventDefault(); 

    // Obtém os valores dos campos do formulário
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;

    // Verifica se os campos foram preenchidos
    if (!name || !email || !phone || !message) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    // Constrói a mensagem a ser enviada
    const whatsappMessage = `Olá! Meu nome é ${name}. \n` +
    `Gostaria de saber mais sobre os serviços. \n` +
    `Aqui estão meus detalhes: \n` +
    `E-mail: ${email} \n` +
    `Telefone: ${phone} \n` +
    `Mensagem: ${message} \n\n` +
    `Aguardo seu retorno! Obrigado!`;
    
    sendToWhatsApp(whatsappMessage);
}

// Adiciona o ouvinte de evento ao formulário quando a página é carregada
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById("contatoForm"); 
    form.addEventListener("submit", handleFormSubmit); 
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
