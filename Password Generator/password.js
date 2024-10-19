// const btn = document.getElementById("button");
const generatedpass = document.querySelector(".generated");


function makingpassword(){
    let a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
    let passwordlength = 8;
    let mypass = "";

    for(let i=0; i<passwordlength; i++){
        mypass = mypass + a.charAt(Math.floor(Math.random() * a.length));

    }
    // console.log(mypass);
    generatedpass.value = mypass;
}
makingpassword();
