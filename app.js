let rect = document.querySelector("#rect");

rect.addEventListener("mousemove", function(blg){
    let val = gsap.utils.mapRange(0, window.innerWidth, 72, window.innerWidth-148+rect.getBoundingClientRect().width/2, blg.clientX)
    gsap.to('#rect',{
        left: val + "px",
        ease: Power3
    });
});