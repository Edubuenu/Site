window.addEventListener('scroll', function() {
    var header = document.querySelector('.page-header');
    var title = document.querySelector('.page-title');
    var scrollPos = window.scrollY;

    if (scrollPos > 50) {
        header.classList.add('small');
        title.classList.add('small');
    } else {
        header.classList.remove('small');
        title.classList.remove('small');
    }
});