// constructive function

const TypeWriter = function(txtElement, words, wait=3000){
    this.txtElement = txtElement;
    this.words = words;
    this.txt = '' // sta god da je otkucano u span-u
    this.wordIndex = 0; // default frist word
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = false; 
}
// Type Method

TypeWriter.prototype.type = function() {
    // get current index of the word
    const current = this.wordIndex % this.words.length;
    // get full text of current word

    const fullTxt = this.words[current];
  
    // check if it's deleting charachters
    // ako je true - remove charachter
    // ako je false - add charachter
    if(this.isDeleting){
        this.txt = fullTxt.substring(0, this.txt.length - 1)
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1)
    }
    // put the result into html

    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

    // Initial Type Speed = 300ms
    let typeSpeed = 300;
    // Deleting = faster
    if(this.isDeleting) {
        // izmedju 150-200ms
        typeSpeed /= 2;
    }
    // Word Complete = this.txt === pause
    if(!this.isDeleting && this.txt === fullTxt) {
        //make pause at end equal to wait time
        typeSpeed = this.wait;

        // Set delete to true = start deleting
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt=== '') {
        this.isDeleting = false;

        // move to next word
        this.wordIndex++;
        // Pause before start typing
        typeSpeed = 500;
    }

    setTimeout(() => this.type(), typeSpeed
    )
}
/*
    Step 1: Init when DOM loads - add event listener
    Step 2: init the function

    sTep 3: parse array to get string values with JSON.parse
*/

document.addEventListener('DOMContentLoaded', init);

function init() {
    const txtElement = document.querySelector('.txt-type');
    const words = JSON.parse(txtElement.getAttribute('data-words'))
    const wait = txtElement.getAttribute('data-wait');

    // Start the typeWriter

    new TypeWriter(txtElement, words, wait)
}

// swiper - init
var swiper = new Swiper('.swiper-container', {
    slidesPerGroup: 1,
    freeMode: false,
    pagination: {
        el: '.swiper-pagination',
        type: 'progressbar',
    },

    breakpointsInverse: true,
    breakpoints: {
        280: {
            slidesPerView: 1,
            spaceBetween: 20,
            centeredSlides: true,
        },
        576: {
            slidesPerView: 2,
            spaceBetween: 20,
            centeredSlides: false,
          },
        768: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        1500: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
      },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});




