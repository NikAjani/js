function checkProgressFun(){
    var p=0;
    var progress = document.getElementById("check1");

    var firstName = document.getElementById("firstName");
    var lastName = document.getElementById("lastName");
    var address = document.getElementById("address");
    var email = document.getElementById("emailId");
    var bdate = document.getElementById("birthDate");
    var gender = document.getElementsByName("gender");
    var city = document.getElementById("city");
    var pinCode = document.getElementById("pinCode");
    var pass = document.getElementById("pass");
    var confirmPassword = document.getElementById("confirmPassword");
    var phoneNo = document.getElementById("phoneNo");
    var col = document.getElementsByName("favColor");
    var img1 = document.getElementsByName("profilePhoto");
    var reading = document.getElementById("reading");
    var cricket = document.getElementById("cricket");
    var playGame = document.getElementById("playGame");

    console.log(firstName);
    console.log(lastName);
    
    
    if(firstName.value!='')   p++;
    if(lastName.value!='')   p++;
    if(address.value!='') p++;
    if(email.value!='')   p++;
    if(bdate.value!='')   p++;
    for(var i=0;i<gender.length;i++){
        if(gender[i].checked){
            p++;
        }
    }
    if(city.value!='')    p++;
    if(pinCode.value!='') p++;
    if(pass.value!='')    p++;
    if(confirmPassword.value!='') p++;
    if(phoneNo.value!='') p++;
    if(col.value!='') p++;
    //if(img1.value!='')    p++;
    if ('files' in img1) {
        if (img1.files.length != 0) {
          p++;
        }
    }
    if(reading.checked || cricket.checked || playGame.checked) p++;
    console.log(p);
    
    var progressValue = (p/13)*100;
    console.log(progressValue);
    
    progress.value = progressValue;
    progress.getElementsByTagName("span").textContent = progressValue;
    //progressBar.getElementsByTagName("span")[0].textContent = i;
}