
// ================================================= 
//       CERTIFICATE CAROUSAL JAVASCRIPT CODE 
// =================================================


const originalCertificate = document.querySelector(".certificate-slide");

  // Loop to clone and append the element three times
for (let i = 0; i < 3; i++) {
    const copyCertificate = originalCertificate.cloneNode(true);
    document.querySelector(".certificate").appendChild(copyCertificate);
}


// ================================================= 
//       MANUFACTURE CAROUSAL JAVASCRIPT CODE 
// =================================================


const originalManu = document.querySelector(".manufacture-slide");

  // Loop to clone and append the element three times
for (let i = 0; i < 3; i++) {
    const copyManu = originalManu.cloneNode(true);
    document.querySelector(".manufacture").appendChild(copyManu);
}

// ================================================= 
//       WORLD MAP AND SCHEDULE CALL JAVASCRIPT CODE 
// =================================================

document.querySelectorAll(".allPaths").forEach(e => {
  e.addEventListener('mouseover', function (){
    window.onmousemove=function(j){
      x=j.clientX;
      y=j.clientY;
      document.getElementById("country-name").style.top=y-20+"px"
      document.getElementById("country-name").style.left=x-20+"px"
    }
    e.style.fill="pink"
    document.getElementById("namep").innerText=e.id
    document.getElementById("country-name").style.opacity=1
  })
  e.addEventListener("mouseleave",function(){
    e.style.fill="#ececec"
    document.getElementById("country-name").style.opacity=0
  })
})





// =========================

let li = document.querySelectorAll(".faq-text li");
    for (var i = 0; i < li.length; i++) {
      li[i].addEventListener("click", (e)=>{
        let clickedLi;
        if(e.target.classList.contains("question-arrow")){
          clickedLi = e.target.parentElement;
        }else{
          clickedLi = e.target.parentElement.parentElement;
        }
       clickedLi.classList.toggle("showAnswer");
      });
    }
