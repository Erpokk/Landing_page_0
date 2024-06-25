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
            

function removeSmallTextClass() {
    if (window.innerWidth >= 1158) {
        document.querySelectorAll('.address-item').forEach(function (element) {
            element.classList.remove('small-text');
        });
        document.querySelectorAll('.benef-item > .par').forEach(function (element) {
            element.classList.remove("body-medium");
        });
    }
    else {
        document.querySelectorAll('.address-item').forEach(function (element) {
            element.classList.add('small-text');
        });
        document.querySelectorAll('.benef-item > .par').forEach(function (element) {
            element.classList.add("body-medium");
        });
    }
}



removeSmallTextClass();

window.addEventListener('resize', removeSmallTextClass, );