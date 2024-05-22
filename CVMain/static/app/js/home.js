
document.querySelector('.arrow-icon .transition').addEventListener('click', function(event) {
    event.preventDefault();
    var href = this.getAttribute('href');
    var reactangle = document.querySelector('.reactangle');
    reactangle.classList.add('fade-out');
    setTimeout(function() {
        window.location.href = href;
    }, 500);
});
var links = document.querySelectorAll('.arrow-icon .transition');
links.forEach(function(link) {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        var href = this.getAttribute('href');
        var reactangle = document.querySelector('.reactangle-rs');
        reactangle.classList.add('fade-out');
        setTimeout(function() {
            window.location.href = href;
        }, 500);
    });
});
var links = document.querySelectorAll('.arrow-icon .transition');
links.forEach(function(link) {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        var href = this.getAttribute('href');
        var reactangle = document.querySelector('.reactangle-pr');
        reactangle.classList.add('fade-out');
        setTimeout(function() {
            window.location.href = href;
        }, 1000);
    });
});
var links = document.querySelectorAll('.arrow-icon.left .transition');
links.forEach(function(link) {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        var href = this.getAttribute('href');
        var reactangle = document.querySelector('.reactangle-rs');
        reactangle.classList.add('fade-out');
        setTimeout(function() {
            window.location.href = href;
        }, 500);
    });
});
var links = document.querySelectorAll('.arrow-icon.left .transition');
links.forEach(function(link) {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        var href = this.getAttribute('href');
        var reactangle = document.querySelector('.reactangle-pr');
        reactangle.classList.add('fade-out');
        setTimeout(function() {
            window.location.href = href;
        }, 500);
    });
});
var links = document.querySelectorAll('.arrow-icon.left .transition');
links.forEach(function(link) {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        var href = this.getAttribute('href');
        var reactangle = document.querySelector('.reactangle-ct');
        reactangle.classList.add('fade-out');
        setTimeout(function() {
            window.location.href = href;
        }, 500);
    });
});

