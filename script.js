const burgerButton = document.getElementById('burgerButton');
const mobileOverlay = document.getElementById('mobileOverlay');
const closeButton = document.getElementById('closeButton');


burgerButton.addEventListener('click', function() {
                mobileOverlay.classList.add('is-open');
            });
        
 closeButton.addEventListener('click', function() {
                mobileOverlay.classList.remove('is-open');
            });

const navList = document.getElementById('nav-list');
const address = document.getElementById('address');
            
function checkWindowSize() {
    if (window.matchMedia('(max-width: 319px)').matches) {
        navList.classList.add('visually-hidden');
        address.classList.add('visually-hidden');
    } else {
        navList.classList.remove('visually-hidden');
        address.classList.remove('visually-hidden');
    }
}

window.addEventListener('resize', checkWindowSize);
window.addEventListener('DOMContentLoaded', checkWindowSize);