let rect = document.querySelector("#center");

rect.addEventListener( "mousemove", function(details){
    let rectlocation = rect.getBoundingClientRect();
    let insiderect = details.clientX - rectlocation.left;

    if (insiderect < rectlocation.width / 2){
        let redcolor =gsap.utils.mapRange(0,rectlocation.width / 2, 255, 0, insiderect);
        gsap.to(rect, {
            backgroundColor: `rgb(${redcolor}, 0, 0)`,
            ease: Power4,
        });
    } else {
        let greencolor =gsap.utils.mapRange(rectlocation.width / 2, rectlocation.width, 0, 255, insiderect);
        gsap.to(rect, {
           backgroundColor: `rgb(0, ${greencolor}, 0)`
        });
    }
});

rect.addEventListener("mouseleave", function(){
   gsap.to(rect, {
    backgroundColor: "white"
   })
})