const burgerButton = document.getElementById('burgerButton');
const mobileOverlay = document.getElementById('mobileOverlay');
const closeButton = document.getElementById('closeButton');
const addBar = document.getElementById('addBar');



burgerButton.addEventListener('click', function() {
                mobileOverlay.classList.add('is-open');
            });
        
 closeButton.addEventListener('click', function() {
                mobileOverlay.classList.remove('is-open');
            });
            
