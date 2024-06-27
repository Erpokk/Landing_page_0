const burgerButton = document.getElementById('burgerButton');
const mobileOverlay = document.getElementById('mobileOverlay');
const closeButton = document.getElementById('closeButton');
const addBar = document.getElementById('addBar');
const submitButton = document.getElementById('submitButton');
const modalOverlay = document.getElementById('modalOverlay');
const mcloseButton = document.getElementById('mcloseButton')

burgerButton.addEventListener('click', function() {
mobileOverlay.classList.add('is-open');
            });
        
closeButton.addEventListener('click', function() {
    mobileOverlay.classList.remove('is-open');
});
            
submitButton.addEventListener("click", function () {
    modalOverlay.classList.add('is-open');
});

mcloseButton.addEventListener('click', function() {
    modalOverlay.classList.remove('is-open');
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

 document.addEventListener("DOMContentLoaded", function () {
            const inputField = document.getElementById("user-privacy");
            const toggleButton = document.getElementById("toggleButton");

            inputField.addEventListener("click", function () {
                toggleButton.disabled = !toggleButton.disabled;
            });
        });



removeSmallTextClass();

window.addEventListener('resize', removeSmallTextClass, );