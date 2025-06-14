document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.navbar a');
    const currentPage = window.location.pathname.split('/').pop(); 

    links.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active'); 
        }
    });
});
