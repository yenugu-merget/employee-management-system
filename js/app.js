function loadEmployees(){

const employees=[
    "Sanjay",
    "John",
    "David",
    "Anita"
];

document.getElementById("count").innerHTML=employees.length;

const list=document.getElementById("employeeList");

list.innerHTML="";

employees.forEach(function(emp){

const li=document.createElement("li");

li.innerHTML=emp;

list.appendChild(li);

});

}