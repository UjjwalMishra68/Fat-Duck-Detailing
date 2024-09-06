document.addEventListener('DOMContentLoaded', () => {
    const headerBtn = document.querySelector('.hamburger__menu');
    const dropDown = document.querySelector('.dropdown');
    let isMobileNavOpen = false;

    headerBtn.addEventListener('click', () => {
        isMobileNavOpen = !isMobileNavOpen;
        if (isMobileNavOpen) {
            dropDown.style.display = "block";
        } else {
            dropDown.style.display = "none";
        }
        console.log(isMobileNavOpen);
    });
});