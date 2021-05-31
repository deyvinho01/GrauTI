//animação scroll leve//

$('nav a').click(function(e){
    e.preventDefault();
    var id = $(this).attr("href"),
    targtOffset = $(id).offset().top;
    menuHeigth = $('div a').innerHeigth();


    $('html, body').animate({
        scrolltop: targtOffset - menuHeigth
    }, 500)
});