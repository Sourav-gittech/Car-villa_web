// hide navbar after clicking
let navlink = document.querySelectorAll('.nav-link');
let navbarCollapse = document.querySelector('.navbar-toggler');

navlink.forEach(function (click) {
    click.addEventListener("click", () => {
        navbarCollapse.click();
    });
});


// show or hide scroll button
let showScroll = () => {
    let scrollBtn = document.querySelector('.scroll-btn');

    window.onscroll = () => {
        let screenSize = document.documentElement.scrollTop;
        if (screenSize < 150) {
            scrollBtn.setAttribute("hidden", "");
        }
        else {
            scrollBtn.removeAttribute("hidden");
        }
    }
}

showScroll();
