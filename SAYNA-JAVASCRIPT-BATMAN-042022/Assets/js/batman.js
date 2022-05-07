


// Animation header
$(document).ready(function() {
    $(".box").animate({
            left: "25%"
        },
        "slow");
});
// Animation title
$(document).ready(function() {
    $(".title").animate({
            left: "17%"
        },
        "slow");
});
// SCROLL
$(document).ready(function() {
    $(window).scroll(function() {
        let scroll = $(window).scrollTop();
        $('.boutton').css(
            "top", scroll, "px"
        )
    })
});


//Menu
let menu = document.querySelectorAll("a");
console.log(menu);

menu.forEach(function(a) {
    a.addEventListener('mouseover', () => {
        a.style.textDecoration = "underline";
    });
    a.addEventListener('mouseout', () => {
        a.style.textDecoration = "none";
    });
});

var i = 0;
var img = ['Batslider1.png', 'Batslider2.png', 'Batslider3.png', 'Batslider4.png', 'Batslider5.png', 'Batslider6.png', 'Batslider7.png', 'Batslider8.png', 'Batslider9.png', 'Batslider10.png']

function slideimg() {
    document.slider.src = "./assets/Home/" + img[i];
    if (i < img.length - 1) {
        i++;
    } else {
        i = 0;
    }
    setTimeout('slideimg()', 3000);
};
window.onload - slideimg();

// icon FOOTER
let mediaIcon = document.getElementsByClassName("buttonlogo");
console.log(mediaIcon);

for (let i = 0; i < mediaIcon.length; i++) {
    const element = mediaIcon[i];
    element.addEventListener('mouseover', () => {
        element.style.color = "#FFFF00";
    })
    element.addEventListener('mouseout', () => {
        element.style.color = "white";
    })

};
// Animation header
$(document).ready(function() {
   $(".box").animate({
           left: "40%"
       },
       "slow");
});
// Animation title
$(document).ready(function() {
   $(".title").animate({
           left: "17%"
       },
       "slow");
});
// SCROLL
$(document).ready(function() {
   $(window).scroll(function() {
       let scroll = $(window).scrollTop();
       $('.boutton').css(
           "top", scroll, "px"
       )
   })
})