$(document).ready(function(){
    setInterval(function(){
       $("#icones").animate({marginTop: $("#icones").offset().top < 0 ? "0" : "-80" });
    },5000);
 });