document.addEventListener('DOMContentLoaded', () => {
    // Saudação dinâmica por horário
    const greetingElement = document.getElementById('dynamic-greeting');
    const currentHour = new Date().getHours();
    let timeGreeting = "Seja bem-vindo!";
    
    if (currentHour >= 5 && currentHour < 12) {
        timeGreeting = "Bom dia! Pronto para cuidar da sua visão?";
    } else if (currentHour >= 12 && currentHour < 18) {
        timeGreeting = "Boa tarde! Como posso te ajudar hoje?";
    } else {
        timeGreeting = "Boa noite! Conte comigo para escolher seus óculos.";
    }
    
    if (greetingElement) {
        greetingElement.innerHTML = `<span>"Isso é viver bem"</span> • ${timeGreeting}`;
    }

    // Controle do Acordeon da Tabela de Lentes
    const catalogToggle = document.getElementById('catalog-toggle');
    const catalogContent = document.getElementById('catalog-content');
    const chevronIcon = document.getElementById('chevron-icon');

    if (catalogToggle) {
        catalogToggle.addEventListener('click', () => {
            catalogContent.classList.toggle('active');
            if (catalogContent.classList.contains('active')) {
                chevronIcon.classList.remove('fa-chevron-down');
                chevronIcon.classList.add('fa-chevron-up');
            } else {
                chevronIcon.classList.remove('fa-chevron-up');
                chevronIcon.classList.add('fa-chevron-down');
            }
        });
    }

    // Compartilhamento / Cópia de Link
    const btnShare = document.getElementById('btn-share');
    const toast = document.getElementById('toast');

    if (btnShare) {
        btnShare.addEventListener('click', () => {
            const currentUrl = window.location.href;
            if (navigator.clipboard) {
                navigator.clipboard.writeText(currentUrl).then(() => {
                    showToast();
                }).catch(err => {
                    console.error('Erro ao copiar link:', err);
                });
            } else {
                showToast();
            }
        });
    }

    function showToast() {
        toast.classList.add('show');
        setTimeout(() => {
            toast.classList.remove('show');
        }, 3000);
    }
});