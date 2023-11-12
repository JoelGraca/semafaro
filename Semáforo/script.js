function red(){
    var cor = document.getElementById('red');
    cor.style.background = 'rgb(240, 27, 27)';

    setTimeout(function(){
        cor.style.background = 'rgb(110, 5, 5)';
        green();
    }, 1000)
}
function yellow(){
    var cor = document.getElementById('yellow');
    cor.style.background = 'rgb(243, 243, 30)';

    setTimeout(function(){
        cor.style.background = 'rgb(132, 132, 4)';
        red();
    }, 1000)
}
function green(){
    var cor = document.getElementById('green');
    cor.style.background = 'rgb(26, 247, 26)';

    setTimeout(function(){
        cor.style.background = ' rgb(7, 73, 7)';
        yellow();
    }, 1000)
}
green();