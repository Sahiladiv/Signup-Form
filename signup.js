function Details(){
  var name = document.getElementById('name').value;
  var dob =  document.getElementById('dob').value;
  var age = document.getElementById('age').value;
  var email = document.getElementById('email').value;
  var phoneNumber = document.getElementById('phoneNumber').value;
  try{
    if(age<0){
      throw "Age is invalid"
    }
  }

  catch(err){
    alert("Error: "+err);
  }

  try{
    if(name==""){
      throw "Fill name";
    }

    if(dob==""){
      throw "Fill Date of Birth";
    }


    if(age==""){
      throw "Fill age";
    }

    if(email==""){
      throw "Fill email id";
    }

    if(phoneNumber==""){
      throw "Fill phone number";
    }

  }

  catch(err){
    alert(err);
  }


}
