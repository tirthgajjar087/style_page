var tl = gsap.timeline({repeat: 2, repeatDelay: 1});

  // no import necessary
//   gsap.to("body", {
//     backgroundColor: "red", 

//     duration: 3
// });

TweenMax.to('.first', 1.5, {
    delay: .2,
    left: '-100%',
    ease: Expo.easeInOut
})

TweenMax.to('.second', 1.5, {
    delay: .4,
    left: '-100%',
    ease: Expo.easeInOut
})

TweenMax.to('.third', 1.5, {
    delay: .6,
    left: '-100%',
    ease: Expo.easeInOut
})

TweenMax.from(".product_text",{
    y:"100%",
    duration:5,
    ease: "elastic.out(1,0.3)",
})


TweenMax.from(".product_img",{
    y:"-150%",
    duration:3,
    delay:2

})


