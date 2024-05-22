
var infoItems = document.querySelectorAll('.grid-1');

infoItems.forEach(function(item) {
    var span = item.querySelector('.info');
    span.style.display = 'none';

    item.addEventListener('mouseover', function() {
        span.style.display = 'inline';
    });

    item.addEventListener('mouseout', function() {
        span.style.display = 'none';
    });
});
var infoItems2 = document.querySelectorAll('.grid-2');

infoItems2.forEach(function(item) {
    var span = item.querySelector('.info');
    span.style.display = 'none';

    item.addEventListener('mouseover', function() {
        span.style.display = 'inline';
    });

    item.addEventListener('mouseout', function() {
        span.style.display = 'none';
    });
});

var grid3 = document.querySelector('.grid-3');
var skillBars = grid3.querySelectorAll('.skill');
var button = document.querySelector('.grid-3 button');

grid3.addEventListener('mouseover', function() {
    skillBars.forEach(function(skillBar) {
        skillBar.style.display = 'block';
    });
    button.style.display = 'block';
});

grid3.addEventListener('mouseout', function() {
    skillBars.forEach(function(skillBar) {
        skillBar.style.display = 'none';
    });
    button.style.display = 'none';
});

window.addEventListener('load', function() {
    const grid1 = document.querySelector('.grid-1');
    const grid2 = document.querySelector('.grid-2');
    const grid3 = document.querySelector('.grid-3');

    grid1.classList.add('animate-in', 'no-pointer-events');
    grid2.classList.add('animate-in', 'no-pointer-events');
    grid3.classList.add('animate-in', 'no-pointer-events');

    setTimeout(function() {
        grid1.classList.remove('no-pointer-events');
        grid2.classList.remove('no-pointer-events');
        grid3.classList.remove('no-pointer-events');
    }, 3000);
});
