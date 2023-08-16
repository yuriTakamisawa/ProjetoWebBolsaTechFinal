

// Script para fazer o menu mobile funcionar

window.onload = function () {
    var menuMobileButton = document.querySelector(".menuMobile");
    var menuNav = document.querySelector(".menu ul");

    var windowWidth = window.innerWidth; // Obtém a largura da janela

    if (windowWidth <= 768) { 
        menuNav.style.display = "none"; // Oculta o menu para dispositivos menores
    }

    menuMobileButton.addEventListener("click", function () {
        var computedStyle = getComputedStyle(menuNav);
        var display = computedStyle.getPropertyValue("display");

        if (display === "block") {
            menuNav.style.display = "none";
        } else {
            menuNav.style.display = "block";
        }
    });
};