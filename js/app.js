const burger = document.getElementById("burger-cta")
const closeSidebar = document.getElementById("close-menu")
const overMenu = document.getElementById("overlay-menu-cta")

const steveP = document.getElementById("steve-p-cta")
const oneArrowUpBtn = document.getElementById("one-arrow-up-cta")
const a = document.getElementById("steve-con-cta")

const phText = document.getElementById("ph-p-cta")
const b = document.getElementById("ph-con-cta")
const twoArrowBtn = document.getElementById("two-arrow-up-cta")

const negText = document.getElementById("neg-p-cta")
const c = document.getElementById("neg-con-cta")
const threeArrowBtn = document.getElementById("three-arrow-up-cta")

const bayText = document.getElementById("bay-p-cta")
const d = document.getElementById("bay-con-cta")
const fourArrowBtn = document.getElementById("four-arrow-up-cta")

closeSidebar.addEventListener("click", function(){
    overMenu.style.top = "-100vh"
})
burger.addEventListener("click", function(){
    overMenu.style.top = "0px"
})

a.addEventListener("click", function(){
    steveP.style.display = "block"
    a.style.borderBottomLeftRadius = "0px"
    a.style.borderBottomRightRadius = "0px"
    steveP.style.position = "static"
    steveP.scrollIntoView()
})
oneArrowUpBtn.addEventListener("click", function(){
    steveP.style.display = "none"
    steveP.style.position = "relative"
    a.style.borderBottomLeftRadius = "30px"
    a.style.borderBottomRightRadius = "30px"
})

twoArrowBtn.addEventListener("click", function(){
    phText.style.display = "none"
    phText.style.position = "relative"
    b.style.borderBottomLeftRadius = "30px"
    b.style.borderBottomRightRadius = "30px"
})

b.addEventListener("click", function(){
    phText.style.display = "block"
    b.style.borderBottomLeftRadius = "0px"
    b.style.borderBottomRightRadius = "0px"
    phText.style.position = "static"
    phText.scrollIntoView()
})

c.addEventListener("click", function(){
    negText.style.display = "block"
    c.style.borderBottomLeftRadius = "0px"
    c.style.borderBottomRightRadius = "0px"
    negText.style.position = "static"
    negText.scrollIntoView()
})
threeArrowBtn.addEventListener("click", function(){
    negText.style.display = "none"
    negText.style.position = "relative"
    c.style.borderBottomLeftRadius = "30px"
    c.style.borderBottomRightRadius = "30px"
})

d.addEventListener("click", function(){
    bayText.style.display = "block"
    d.style.borderBottomLeftRadius = "0px"
    d.style.borderBottomRightRadius = "0px"
    bayText.style.position = "static"
    bayText.scrollIntoView()
})
fourArrowBtn.addEventListener("click", function(){
    bayText.style.display = "none";
    d.style.borderBottomLeftRadius = "30px"
    d.style.borderBottomRightRadius = "30px"
    
})