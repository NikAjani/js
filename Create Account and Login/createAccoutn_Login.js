var userData = new Object();

function createNewUser(){
    
    userData.firstName = document.getElementById("firstName").value;
    userData.lastName = document.getElementById("lastName").value;
    userData.email = document.getElementById("emailId").value;
    userData.password = document.getElementById("pass").value;
    userData.phoneNo = document.getElementById("phoneNo").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    var emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var namePattern = /^[A-Za-z]+$/;
    
    
    

    if(userData.firstName == '' || !namePattern.test(userData.firstName)){
        console.log("Please Enter FirstName");
    }else if(userData.lastName == '' || !namePattern.test(userData.lastName)){
        console.log("Please Enter LastName");
    }else if(userData.password !== confirmPassword){
        console.log("password and Confirm password is not Match");
    }else if(!emailPattern.test(userData.email)){
        console.log("Please Enter Email..");
    }else if(userData.phoneNo == '' || userData.phoneNo.length >10 || userData.phoneNo.length < 10){
        console.log("Please Enter valid Phone Number...");
    }else{
        console.log("User Account is created ...");
        console.log(userData);
        var printData = '<br>First Name : '+userData.firstName+'<br> Last Name : '+userData.lastName+'<br> Phone No : '+userData.phoneNo+'<br> Email Id : '+userData.email+'<br> Password : '+userData.password;
        document.getElementById("printUserData").innerHTML = printData;
    }
}

function checkLogin(){
    var loginEmail = document.getElementById("loginEmail").value;
    var loginPassword = document.getElementById("loginPassword").value;
    
    if(loginEmail !='' && loginPassword != ''){
        loginEmail===userData.email && loginPassword === userData.password ? alert("Login..") : alert("Please Try Again..")
    }else{
        console.log("Please Enter Valid Detail..");   
    }
}