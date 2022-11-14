const body =document.querySelector('body');
const error="Your attendence is less than 75%";
const formHead="UG CBCS SEM-III/V Exam. Form 2022";
const inputLabel="Enter your Regn-Number:";
const navbar=`<div class="navbar"><div class="navbar-inner-div"></div></div>`;
const formDiv=`<div class="form-div"><div class="form-inner-div"><span>${formHead}</span><div class="input-div"><label>${inputLabel}</label><input class="input" type="number"></div><div class="semester-btn"><button class="sem sem3">Sem-III</button><button class="sem sem5">Sem-V</button><a href="https://www.nbuexams.net/StudentHome.php#!"><button class="cancel">cancel</button></a></div></div></div>`;
const errorDiv=`<div class="error"><p>${error}</p></div>`;
body.insertAdjacentHTML("afterbegin",formDiv);
body.insertAdjacentHTML("afterbegin",navbar);
const btn=document.querySelectorAll(".sem");
const input=document.querySelector("input");
const inputDiv=document.querySelector(".input-div");
inputDiv.insertAdjacentHTML('beforebegin',errorDiv);
const errorDiv1=document.querySelector(".error")
btn.forEach(btn=>{
    btn.addEventListener("click",()=>{
        if(input.value==''){
            input.style.borderColor="red";
            input.focus();
        }
        else{
            input.style.borderColor="green";
            errorDiv1.style.display="block";

        }

    })
})

