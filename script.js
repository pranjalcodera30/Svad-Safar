
window.onload = function() {
    // Hide loading spinner
    document.getElementById('loading').style.opacity = '0';
    setTimeout(() => {
        document.getElementById('loading').style.display = 'none';
    }, 500); // Matches the CSS transition duration (0.5s)

    // Adding 3D hover animation
    const nav = document.querySelector('nav');
    const header = document.querySelector('header');

    window.addEventListener('scroll', () => {
        let offset = window.pageYOffset;
        nav.style.transform = `translateZ(${offset * 0.1}px)`;
        header.style.transform = `translateZ(${offset * -0.1}px)`;
    });
};
