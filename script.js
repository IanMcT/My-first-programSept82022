
function sayHi(){
  //alert("in sayHi method");
  var name;
  name = document.getElementById("inputName").value;
  alert(name);
  var age;
  age = parseInt(document.getElementById("inputAge").value);
  alert(age+1);
  document.getElementById("output").innerHTML = "Hello, " + name +
    ". You are " + age + " years old.  Next year you will be " + (age+1);
}


