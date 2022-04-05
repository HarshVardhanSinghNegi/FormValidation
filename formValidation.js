function clearErrors(){
    errors=document.getElementsByClassName('formError');
    for (let item of errors){
        item.innerHTML="";
    }
}
function setError(id,error){
    // sets error inside tag of ID
    element=document.getElementById(id);
    element.getElementsByClassName("formError")[0].innerHTML=error;

}
let change=document.getElementById('name');
change.addEventListener('mouseover',setError('name',""));

function validateForm(){
    clearErrors();
    let returnVal=true;
    var name=document.forms['myForm']['nameInput'].value;
    var email=document.forms['myForm']['emailInput'].value;
    var phone=document.forms['myForm']['phoneInput'].value;
    var password1=document.forms['myForm']['passwordInput'].value;
    var password2=document.forms['myForm']['password2Input'].value;

    //perform validation set value of returnValue
    if(name.length<5){
        setError("name"," *Length of name is too short.");
        returnVal=false;
    }
    //Password Validation
    if(password1.length<8){
        setError("password"," *Password should be atleast 8 characters");
        returnVal=false;
    }
    else if(!password1.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,15}$/)){
        setError("password"," * use Uppercase Lowercase Numbers and symbols and length should be less than 15.");
        returnVal=false;
    }
    if(password1!==password2){
        setError("password2"," *Passwords don't match!");
        returnVal=false;
    }
    
    //email validation
    if(email.length>20){
        setError("email"," *Length of email is too much!");
        returnVal=false;
    }

    //phone validation
    console.log(Number(phone));
    if(!Number(phone)){
        setError("phone"," *Enter a valid Number!");
        returnVal=false;
    }
    else if(phone.length!=10){
        setError("phone"," *Please enter a 10 digit number!");
        returnVal=false;
    }

    return returnVal;
}