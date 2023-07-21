const burger = document.getElementById("burger-cta")
const closeSidebar = document.getElementById("close-menu")
const overMenu = document.getElementById("overlay-menu-cta")
const steveCon = document.getElementById("steve-con-cta")
const steveP = document.getElementById("steve-p-cta")
const oneArrowUpBtn = document.getElementById("one-arrow-up-cta")
const a = document.getElementById("steve-con-cta")

closeSidebar.addEventListener("click", function(){
    overMenu.style.top = "-100vh"
})
burger.addEventListener("click", function(){
    overMenu.style.top = "0px"
})

steveCon.addEventListener("click", function(){
    steveP.style.top = "0px";
    a.style.borderBottomLeftRadius = "0px"
    a.style.borderBottomRightRadius = "0px"
    steveP.style.position = "static"
})
oneArrowUpBtn.addEventListener("click", function(){
    steveP.style.top = "-200px"
    steveP.style.position = "relative"
    a.style.borderBottomLeftRadius = "30px"
    a.style.borderBottomRightRadius = "30px"
})