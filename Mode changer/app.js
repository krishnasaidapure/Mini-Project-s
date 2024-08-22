let btn1 = document.querySelector("#btn1");
let body = document.querySelector("body");
let modebtn  = document.querySelector("button");
let currmode = "light";
let currmodee = "dark";

    modebtn.addEventListener("click",() => {
    if (currmode === "light") {
        currmode = "dark";
        body.classList.remove("light")
        body.classList.add("dark");
        
    } else {
        currmode = "light";
        body.classList.remove("dark")
        body.classList.add("light");
    }
    console.log(currmode)
});


    btn1.addEventListener("click",() => {
    if (currmodee === "dark") {
        currmodee = "light";
        btn1.classList.remove("dark")
        btn1.classList.add("light");
        
    } else {
        currmodee = "dark";
        btn1.classList.remove("light")
        btn1.classList.add("dark");

    }
    console.log(currmodee)
});



