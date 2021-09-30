const button=document.querySelector("button");
button.disabled=true;

// condition of form validation
//  1=> name must be greater then 3 characters
//  2=> age must be greater then 0 and less then 100
//  3=> email must contain @ and . after @ symbol
//  4=> phone number must be length equal to 10 

function submitHandler(event){
    event.preventDefault();
    console.log(event.target)
    const data= new FormData(event.target)
    window.myData=data

}

function nameValidation(){
    let name=document.getElementById('name');
    if(name.value.length>3){
        return true;
    }
    return false;
}
function ageValidation(){
    let age=document.getElementById('age');
    if(age.value>0 && age.value<100){
        return true;
    }
    return false;
}
function phoneValidation(){
    let phone=document.getElementById('phone');
    if(phone.value.length==10){
        return true;
    }
    return false;

}
function emailValidation(){
    let email=document.getElementById('email').value;
    const positionOfAt=email.lastIndexOf('@')
    const positionOfDot=email.lastIndexOf('.')
    if(positionOfAt<positionOfDot && positionOfAt!==-1 || positionOfDot!==-1){
        return true;
    }
    return false;
}


function isValid(){
    if(
       nameValidation() && 
       emailValidation() && 
       phoneValidation() && 
       ageValidation()
       ){
        button.disabled=false;
    }else{
        button.disabled=true;
    }
}

function onChangeHandler(){
console.log('onChangeHandler')

}