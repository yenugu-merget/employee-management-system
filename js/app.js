
console.log("app.js loaded");

function loadEmployees() {

    document.getElementById("count").innerHTML = employees.length;

    const list = document.getElementById("employeeList");

    list.innerHTML = "";

    employees.forEach(function(emp){

        const li = document.createElement("li");

        li.innerHTML =
            emp.id +
            " | " +
            emp.name +
            " | " +
            emp.department +
            " | " +
            emp.designation;

        list.appendChild(li);

    });

}

const employees = [
    {
        id: "EMP101",
        name: "Sanjay",
        department: "QA",
        designation: "QA Manager",
        email: "sanjay@company.com"
    },
    {
        id: "EMP102",
        name: "John",
        department: "Development",
        designation: "Software Engineer",
        email: "john@company.com"
    },
    {
        id: "EMP103",
        name: "David",
        department: "HR",
        designation: "HR Executive",
        email: "david@company.com"
    },
    {
        id: "EMP104",
        name: "Anita",
        department: "Finance",
        designation: "Accountant",
        email: "anita@company.com"
    },
    {
        id: "EMP105",
        name: "Miraj",
        department: "Support",
        designation: "Technical Support Engineer",
        email: "miraj@company.com"
    },
    {
        id: "EMP106",
        name: "Akash",
        department: "Development",
        designation: "Frontend Developer",
        email: "akash@company.com"
    },
    {
        id: "EMP107",
        name: "Dev",
        department: "DevOps",
        designation: "DevOps Engineer",
        email: "dev@company.com"
    }
];