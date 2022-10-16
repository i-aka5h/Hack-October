
// timing homepage texts
var himsg=document.getElementById("himsg");
var intro=document.getElementById("intro")


var text1=document.getElementById("text1");
var text2=document.getElementById("text2");
var text3=document.getElementById("text3");
var text4=document.getElementById("text4");
var text5=document.getElementById("text5");
var text6=document.getElementById("text6");


function showhimsg(){
    himsg.classList.add("show");
}
function showintro(){
    intro.classList.add("show");
}

function showtext1(){
    text1.classList.add("show");
}

function showtext2(){
    text2.classList.add("show");
}

function showtext3(){
    text3.classList.add("show");
}

function showtext4(){
    text4.classList.add("show");
}

function showtext5(){
    text5.classList.add("show");
}

function showtext6(){
    text6.classList.add("show");
}

setTimeout(showhimsg, 1000);
setTimeout(showintro, 2000);

setTimeout(showtext1, 3500);

setTimeout(showtext2, 5000);
setTimeout(showtext3, 6500);
setTimeout(showtext4, 8000);
setTimeout(showtext5, 9500);
setTimeout(showtext6, 11000);

// validating form inputs before submitting

var myform=document.forms.contact_form;
var error=document.getElementById("error")


myform.onsubmit=function(){
        if(myform.name.value==""){
            error.innerHTML="Please enter your name before submitting"
            return false
        }
        else if(myform.email.value==""){
            error.innerHTML="Please enter your email before submitting"
            return false
        }
        else if(myform.contact_no.value==""){
            error.innerHTML="Please enter your contact no."
            return false
        }
        
        else if(myform.message.value==""){
            error.innerHTML="Please enter your message."
            return false
        }
        else{
            error.innerHTML="";
            return true
        }
        
}

form_name=document.getElementById("name");
form_email=document.getElementById("email");
form_contact=document.getElementById("contact_no");
form_message=document.getElementById("message");


// adding onfocus and onblur events to form fields

form_name.onfocus = function(){
    myform.name.style.border="0.1px solid blue";
}
form_name.onblur=function(){
        myform.name.style.border="";
}


form_email.onfocus = function(){
    myform.email.style.border="0.1px solid blue";
}
form_email.onblur=function(){
        myform.email.style.border="";
}


form_contact.onfocus = function(){
    myform.contact_no.style.border="0.1px solid blue";
}
form_contact.onblur=function(){
        myform.contact_no.style.border="";
}


form_message.onfocus = function(){
    myform.message.style.border="0.1px solid blue";
}
form_message.onblur=function(){
        myform.message.style.border="";
}
