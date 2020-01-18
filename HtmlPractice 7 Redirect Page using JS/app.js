function validAll(){
    var firstName = document.getElementById("firstName");
    var lastName = document.getElementById("lastName");
    var street = document.getElementById("street");
    var city = document.getElementById("city");
    var bio = document.getElementById("bio");
    var ageGroup = document.getElementById("ageGroup");
    var hobby = document.getElementById("hobby");
    var favCar = document.getElementById('favCar');
    var tanasport = document.getElementById('tanasport');

    if(firstName.value == ''){
        alert('Please Enter First Name');
    }else if(lastName.value == ''){
        alert('Please Enter Last Name');
      
    }else if(street.value == ''){
        alert('Please Enter Stree Name ');
      
    }else if(city.value == ''){
        alert('Please Enter City');
     
    }else if(bio.value == ''){
        alert('Please Enter Bio');
        
    }else if(ageGroup.value == ''){
        alert("Please Select Age Group..");
      
    }else if(favCar.value == ''){
        alert('Please Select Favourite Car ');
    }else if(hobby == ''){
		alert('Please Select Hobby');
		
	}else if(tanasport == ''){
		alert('Please Select tanasport');
		
	}else{

        window.location = 'redirect.html';
    }

}