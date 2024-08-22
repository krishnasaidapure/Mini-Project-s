let astatus= document.querySelector("h5")
let btn = document.querySelector("#add")
let check = 0

add.addEventListener("click",function(){
   if(check == 0){
     astatus.innerHTML = "Friends"
     astatus.style.color = "green"
     btn.innerHTML = "Remove Friend"
     btn.style.backgroundColor = "gray"
     btn.style.color = "black"
     check = 1
   } else {
     astatus.innerHTML = "Stranger"
     astatus.style.color = "red"
     btn.innerHTML = "Add Friend"
     btn.style.backgroundColor = "rgb(19, 68, 28)"
     btn.style.color = "#fff"
     check = 0
   }
});