function validate(){
  var fname = document.form.first.value;
  var mname = document.form.middle.value;
  var lname = document.form.last.value;
  var email = document.form.email.value;
  var phone = document.form.phone.value;
  //var address = document.form.address.value;
  var nationality = document.form.nationality.value;

  //putting constraints for validation
var alphab = /^[A-Za-z]+$/;
var vemail = /[A-Z0-9._%+-]+@[A-Z0-9]+.+.[A-Z]{2,4}/igm;
var vaddress = /^[a-zA-Z0-9\s,.'-]{3,}$/;
var vphone = /^d{10}$/;

//checking validating for each form element
if(fname.match(alphab)){
  return true;
} else{
  alert("Invalid first name, check again and rewrite!")
}
if(mname.match(alphab)){
  return true;
} else{
  alert("Invalid middle name, check again and rewrite!")
}
if(lname.match(alphab)){
  return true;
} else{
  alert("Invalid last name, check again and rewrite!")
}
if(email.match(vemail)){
  return true;
} else{
  alert("Invalid email, check again and rewrite!")
}
if(phone.match(vphone)){
  return true;
} else{
  alert("Invalid phone number, check again and rewrite!")
}
if(nationality.match(alphab)){
  return true;
} else{
  alert("Invalid Nationality, check again and rewrite!")
}



}

//sending form info to a local storage
function sendtoform(){
  const first1 = form.elements["f_name"].value;
  const middle1 = form.elements["m_name"].value;
  const last1 = form.elements["l_name"].value;
  const email1 = form.elements["email"].value;
  const phonenumber1 = form.elements["phone"].value;
  //const address1 = form.elements["address"].value;
  const nationality1 = form.elements["nationality"].value;

  //saving to local storge
  window.localStorage.setItem("v1",first1);
  window.localStorage.setItem("v2",middle1);
  window.localStorage.setItem("v3",last1);
  window.localStorage.setItem("v4",email1);
  window.localStorage.setItem("v5",phonenumber1);
  window.localStorage.setItem("v6",nationality1);

}

//getting infor from local storage
document.getElementById("f1").innerHTML = window.localStorage.getItem(v1);
document.getElementById("f2").innerHTML = window.localStorage.getItem(v2);
document.getElementById("f3").innerHTML = window.localStorage.getItem(v3);
document.getElementById("f4").innerHTML = window.localStorage.getItem(v4);
document.getElementById("f5").innerHTML = window.localStorage.getItem(v5);
document.getElementById("f6").innerHTML = window.localStorage.getItem(v6);




