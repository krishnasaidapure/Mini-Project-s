let elem = document.querySelectorAll(".element")

elem.forEach(function(elemi){
    elemi.addEventListener("mouseenter", function(){
        elemi.childNodes[3].style.opacity = 1
    })
    elemi.addEventListener("mouseleave", function(){
        elemi.childNodes[3].style.opacity = 0
    });
    elemi.addEventListener("mousemove", function(dets){
        elemi.childNodes[3].style.left = dets.x+"px"
    });
});