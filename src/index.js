import './style.css';
import homeContent from "./home-tab.html";
import menueContent from "./menue-tab.html";
import aboutContent from "./about-tab.html";


const contentElement = document.querySelector(".content")

//contentElement.innerHTML = homeContent


const homeBtn = document.querySelector("#home")
homeBtn.addEventListener("click", () => {
    contentElement.innerHTML = homeContent
})

const menueBtn = document.querySelector("#menue")
menueBtn.addEventListener("click", () => {
    contentElement.innerHTML = menueContent
})

const aboutBtn = document.querySelector("#about")
aboutBtn.addEventListener("click", () => {
    contentElement.innerHTML = aboutContent
})


console.log("helllo")


