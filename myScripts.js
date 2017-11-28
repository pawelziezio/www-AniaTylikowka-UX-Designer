const navBars = document.getElementById('navBars');
const mainMenu = document.getElementById('mainMenu');
const nav = document.querySelector('nav')

navBars.addEventListener('click',function(){
  let top = innerWidth > 420 ? '70px' : '50px';
  mainMenu.style.top = top;
  mainMenu.classList.toggle('show');
})

// --- parallax ----------------

const images = document.querySelectorAll('.js-parallax-bg');

function getViewportHeight() {
    let a = document.documentElement.clientHeight, b = window.innerHeight;
    return a < b ? b : a;
}

function getViewportScroll() {
    if(typeof window.scrollY != 'undefined') {
        return window.scrollY;
    }
    if(typeof pageYOffset != 'undefined') {
        return pageYOffset;
    }
    let doc = document.documentElement;
    doc = doc.clientHeight ? doc : document.body;
    return doc.scrollTop;
}

function doParallax() {
    let el, elOffset, elHeight,
        offset = getViewportScroll(),
        vHeight = getViewportHeight();

    for(var image of images) {
        el = image;
        elOffset = el.offsetTop;
        elHeight = el.offsetHeight;

        if((elOffset > offset + vHeight) || (elOffset + elHeight < offset)) { continue; }

        el.style.backgroundPosition = '50% '+Math.round((elOffset - offset)*3/8)+'px';
    }
}

window.addEventListener('scroll', doParallax);
