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