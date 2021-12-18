const navLinks = document.querySelector('.nav');

const hoverHandler = function(event, opacity) {
    if (event.target.classList.contains('nav__link')) {
        const link = event.target;
        const siblings = link.closest('.nav__links').querySelectorAll('.nav__link');
        
        siblings.forEach(function(el) {

            if (el !== link) el.style.opacity = opacity;
        })
    }
}

navLinks.addEventListener('mouseover', function(ev) {

    hoverHandler(ev, 0.5);
})

navLinks.addEventListener('mouseout', function(ev) {

    hoverHandler(ev, 1);
})

