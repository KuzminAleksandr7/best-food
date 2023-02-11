function burger() {
    let mobileMenu = document.getElementById('mobile-menu');
    let header = document.getElementById('header');

    if (mobileMenu.style.left === "0vw") {
        mobileMenu.style.left = "100vw";
        document.body.style.overflow = '';
        mobileMenu.style.backgroundColor = '#000000D1';
        header.style.backgroundColor = '#000000D1';
    } else {
        mobileMenu.style.left = "0vw";
        document.body.style.overflow = 'hidden'
        mobileMenu.style.backgroundColor = '#000000f0';
        header.style.backgroundColor = '#000000f0';
    }
}