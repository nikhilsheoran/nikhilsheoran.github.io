const last_card_height = 6000;
const big_circle_height = 850;
const circle_height_correction = 900;
const carouselText = [
  {text: "Nikhil Sheoran", color: "#cf0000"},
  {text: "A Web Developer. . . ", color: "#ff7b54"},
  {text: "A Speedcuber. . . ", color: "#fb3640"},
  {text: "A Video Editor. . . ", color: "#e1701a"},
  {text: "A Web Designer. . . ", color: "#f21170"}
]
var items = document.getElementsByClassName("card-li");

function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function callbackFunc() {
  for (var i = 0; i < items.length; i++) {
    if (isElementInViewport(items[i])) {
      if (items[i].classList.contains("hidden-card")) {
        items[i].classList.remove("hidden-card");
      }
    }
    else if (!isElementInViewport(items[i])) {
      if (!items[i].classList.contains("hidden-card")) {
        items[i].classList.add("hidden-card");
        
      }
    }

  }
}
function textChanger(){
  async function typeSentence(sentence, eleRef, delay = 70) {
    const letters = sentence.split("");
    let i = 0;
    while(i < letters.length) {
      await waitForMs(delay);
      document.getElementById(eleRef).append(letters[i]);
      i++
    }
    return;
  }

  async function deleteSentence(eleRef) {
    const sentence = document.getElementById(eleRef).innerHTML;
    const letters = sentence.split("");
    let i = 0;
    while(letters.length > 0) {
      await waitForMs(70);
      letters.pop();
      document.getElementById(eleRef).innerHTML = letters.join("");
    }
  }

  function waitForMs(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
  }
  function random_font(){
    fonts = ["Anada","Itim","Sacramento","Amatic SC","Gloria Hallelujah","Handlee","Indie Flower","Pacifico","Rancho","Reenie Beanie","Rochester","Sacramento","Shadows Into Light"];

    return fonts[Math.floor(Math.random() * fonts.length)];
  }


  async function carousel(carouselList, eleRef) {
    var i = 0;
    while(true) {
      updateFontColor(eleRef, carouselList[i].color)
      await typeSentence(carouselList[i].text, eleRef);
      await waitForMs(1500);
      await deleteSentence(eleRef);
      await waitForMs(500);
      i++
      if(i >= carouselList.length) {i = 0;
    document.getElementsByTagName("header")[0].style.fontFamily = random_font();
  }
    }
  }
    
  function updateFontColor(eleRef, color) {
    document.getElementById(eleRef).style.color = color;
    document.getElementById("input-cursor").style.backgroundColor = color;

  }
  carousel(carouselText,"sentence");
}
textChanger();
window.addEventListener("scroll", (event) => {
let scroll = this.scrollY -800;
div_height = scroll + 300;
circle_height = div_height+circle_height_correction;
final_div_height = div_height+"px";
final_circle_height = circle_height+"px";

document.getElementById("timeline-scroll-div").style.height = final_div_height;
if(circle_height >= big_circle_height){
  document.getElementsByClassName("timeline-fixed-circle-div")[0].style.top = final_circle_height;
  }

if(circle_height >=last_card_height){
  document.getElementsByClassName("last-card")[0].classList.add("last-card-hover");
}
else{
  document.getElementsByClassName("last-card")[0].classList.remove("last-card-hover");
}
})


window.addEventListener("load", callbackFunc);
window.addEventListener("scroll", callbackFunc);