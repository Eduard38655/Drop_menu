let menu=document.querySelector("button")

let icon1=document.getElementById("num1")
let icon2=document.getElementById("num2")

icon2.classList.add("deactive_icon")
menu.addEventListener("click",e=>{

let box=document.querySelector("ul")
box.classList.toggle("active")

try {
    if (icon1.classList.contains("fa-solid")) {
        icon1.classList.toggle("deactive_icon")
        icon2.classList.toggle("active_icon")
    }
    else{
        icon2.classList.add("deactive_icon")
    }
    
} catch (error) {
    alert("There was an error"+error);
}


})