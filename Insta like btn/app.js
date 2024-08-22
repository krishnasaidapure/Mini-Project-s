let cntr = document.querySelector("#container")
let like = document.querySelector("#pg")

cntr.addEventListener("dblclick",function(){
    like.style.transform = 'translate(-50%, -50%) scale(1)';
    like.style.opacity = 1

    setTimeout(function(){
        like.style.opacity = 0
    }, 500);
})
