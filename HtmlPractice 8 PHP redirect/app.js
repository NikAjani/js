function validRequeridField(){
    var email = document.getElementById('emailId').value;
    var reEnterEmail = document.getElementById('reEnterEmail').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;
    var dateOfBirth = document.getElementById('dateOfBirth').value;
    var gender = document.getElementById('gender').value;
    var securityQuestion = document.getElementById('securityQuestion').value;
    var phoneNo = document.getElementById('phoneNo').value;
    var emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if(dateOfBirth == ''){
        alert('Please Enter Date of Birth');
    }else if(gender == ''){
        alert('Please Enter Gender');
    }else if(securityQuestion == '' || securityQuestion == 'any'){
        alert('Please Select Security Question');
    }else if(phoneNo == ''){
        alert('Please Enter Phone Number');
    }

    if(email != ''){
        if(!emailPattern.test(email)){
            alert('Please Enter Valid Email..')
        }else if(reEnterEmail == '' || email!=reEnterEmail){
            alert('Please Re-Enter Your Email Or Check Your Email')
        }
    }

    if(password != ''){
        if(confirmPassword == '' || confirmPassword != password){
            alert('Please Enter Valid Confirm Password');
        }
    }

    
}