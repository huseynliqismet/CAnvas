let h1=document.querySelector(".h1");
let h2=document.querySelector(".h2");
let h3=document.querySelector(".h3");
let p1=document.querySelector(".p1");
let p2=document.querySelector(".p2");
let p3=document.querySelector(".p3");
let country=document.querySelector(".number-1")
let p=document.querySelectorAll(".time-content p")
let valueDisplay=document.querySelectorAll(".num");
let interval=2000;
let buy=document.querySelector(".buy")
let rent=document.querySelector(".rent")
let tabcontent=document.querySelector(".tab-content")
let tabcontent2=document.querySelector(".tab-content2")

h1.onclick=function(){
    p1.style.display="block"
    p2.style.display="none"
    p3.style.display="none"
    country.style.display="block"
}
h2.onclick=function(){
    p1.style.display="none"
    p2.style.display="block"
    p3.style.display="none"
      country.style.display="none"
}
h3.onclick=function(){
    p1.style.display="none"
    p2.style.display="none"
    p3.style.display="block"
    country.style.display="none"
}

valueDisplay.forEach((valueDisplay) =>{
    let startvalue=0;
    let endvalue=parseInt(valueDisplay.getAttribute("data-value"));
    let duraction=Math.floor(interval/endvalue);
    let counter=setInterval(function(){
        startvalue+=1;
        valueDisplay.textContent=startvalue;
        if(startvalue==endvalue){
            clearInterval(counter);
        }
    }, duraction);

})
buy.onclick=function(){
    tabcontent.style.display="block"
    tabcontent2.style.display="none"
}
rent.onclick=function(){
    tabcontent.style.display="none"
    tabcontent2.style.display="block"
    
}
// var fullname =document.getElementsByName("fullname");
// var email=document.getElementsByName("email");
// var number=document.getElementsByName("number");
// var comment=document.getElementsByName("comment");
//  var emailError=document.getElementById("Emailerror");
//  var fulnameerror=document.getElementById("fulnameerror");
//  var Phoneerrorr=document.getElementById("Phoneerror");

 

// function validated() {
//     if (email.value.length< 9){
//         email.style.border="1px solid red"
//         emailError.style.display="block "
//         email.focus();
//         return false;

//     }
    
// }
// validated()

// console.log(validated());

// const input=document.querySelector(" #email .input")
// const btn=document.querySelector(" #email .btn")
// const error=document.querySelector("#email .error")
// btn.onclick=function(){
//     if(input.value.lenght<6){
//         input.style.border="red"
//     }
// }

// var slider = document.getElementById("myRange");
// var output = document.getElementById("demo");
// output.innerHTML = slider.value;

// slider.oninput = function() {
//   output.innerHTML = this.value;
// }
