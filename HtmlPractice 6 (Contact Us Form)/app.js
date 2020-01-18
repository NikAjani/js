
function onClickCheck(){

    fullName = document.getElementById("fullName").value;
    email = document.getElementById("emailId").value;
    phoneNo = document.getElementById("phoneNo").value;
    comment = document.getElementById("comment").value;
    var namePattern = /^[A-Za-z]+$/;
    var emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if(!namePattern.test(fullName)){
        alert("Please Enter Valid Full Name");
    }else if(!emailPattern.test(email)){
        alert("Please Enter Valid Email");
    }else if(phoneNo == '' || phoneNo.length >10 || phoneNo.length < 10){
        alert("Please Enter valid Phone Number...");
    }else if(comment == ''){
        alert("Please Enter Your Comment");
    }else{
        alert("Your request has been Submitted !");
        location.reload();
    }
    
    
}