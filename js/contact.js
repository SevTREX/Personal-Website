const burger = document.getElementById("burger-cta")
const closeSidebar = document.getElementById("close-menu")
const overMenu = document.getElementById("overlay-menu-cta")
const sendEmailBtn = document.getElementById("send-email-btn-cta")
const email = document.getElementById("input-email-cta").innerHTML
const msg = document.getElementById("input-msg-cta").innerHTML
const name = document.getElementById("input-name-cta").innerHTML

closeSidebar.addEventListener("click", function(){
    overMenu.style.top = "-100vh"
})
burger.addEventListener("click", function(){
    overMenu.style.top = "0px"
})