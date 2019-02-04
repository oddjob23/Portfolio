// menu bar

const button = document.querySelector('#menu-btn');

const nav = document.querySelector("nav.navigation");
const container = document.querySelector(".container");
const closeBtn = document.querySelector("#close-btn");
const buttonBox = document.querySelector(".menu-button");
const buttonBox2 = document.querySelector(".menu-button2");
$(document).ready(function(){
    $(button).on("click", function(event){
        event.preventDefault();

        var slideoutMenu = $('.navigation');

        slideoutMenu.toggleClass("open");

        if(slideoutMenu.hasClass("open")) {
            slideoutMenu.css({
                zIndex: "51"
            })
            $(button).css({
                zIndex: "400 important",
                left: "140px",
                transition: "left 0.4s ease-in-out",
                cursor: "pointer",
                display: "block"

            })
            $(button).html('<i class="fal fa-arrow-left"></i>');
            slideoutMenu.animate({
                width: "200px",
                opacity: "1",
            }, 400);
        } else {
            $(button).html('<i class="fal fa-ellipsis-v"></i>');
            slideoutMenu.animate({
                width: "0",
                opacity: "0"
            }, 1000)
            $(button).animate({
                left: "0"
            }, 200)
        }
    });
})
