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
    },
    {
        id: "EMP108",
        name: "Mahendra",
        department: "ProdQA",
        designation: "Engineer",
        email: "Mahendra@company.com"
    }
];

const SEARCHABLE_FIELDS = ["id", "name", "department", "designation", "email"];

let employeesLoaded = false;

function normalizeQuery(query) {
    return query.trim().toLowerCase();
}

function employeeMatchesQuery(employee, normalizedQuery) {
    return SEARCHABLE_FIELDS.some(function (field) {
        const value = employee[field];
        if (value == null) {
            return false;
        }
        return String(value).toLowerCase().includes(normalizedQuery);
    });
}

function searchEmployees(query) {
    const normalizedQuery = normalizeQuery(query);

    if (!normalizedQuery) {
        return employees.slice();
    }

    return employees.filter(function (emp) {
        return employeeMatchesQuery(emp, normalizedQuery);
    });
}

function formatEmployee(emp) {
    return (
        emp.id +
        " | " +
        emp.name +
        " | " +
        emp.department +
        " | " +
        emp.designation +
        " | " +
        emp.email
    );
}

function updateEmployeeCount(count) {
    document.getElementById("count").textContent = count;
}

function renderEmployeeList(employeeSubset, query) {
    const list = document.getElementById("employeeList");
    const noResults = document.getElementById("noResults");
    const clearBtn = document.getElementById("clearSearch");

    list.innerHTML = "";
    noResults.hidden = true;
    noResults.textContent = "";

    employeeSubset.forEach(function (emp) {
        const li = document.createElement("li");
        li.textContent = formatEmployee(emp);
        list.appendChild(li);
    });

    if (employeeSubset.length === 0 && normalizeQuery(query || "")) {
        noResults.hidden = false;
        noResults.textContent = "No employees found matching \"" + query.trim() + "\".";
    }

    clearBtn.hidden = !normalizeQuery(query || "");
}

function handleSearchInput() {
    if (!employeesLoaded) {
        return;
    }

    const query = document.getElementById("searchInput").value;
    const filtered = searchEmployees(query);

    renderEmployeeList(filtered, query);
    updateEmployeeCount(filtered.length);
}

function clearSearch() {
    const searchInput = document.getElementById("searchInput");
    searchInput.value = "";
    handleSearchInput();
    searchInput.focus();
}

function loadEmployees() {
    employeesLoaded = true;

    const searchInput = document.getElementById("searchInput");
    searchInput.disabled = false;
    searchInput.value = "";

    renderEmployeeList(employees, "");
    updateEmployeeCount(employees.length);
    searchInput.focus();
}

function initSearch() {
    document.getElementById("searchInput").addEventListener("input", handleSearchInput);
    document.getElementById("clearSearch").addEventListener("click", clearSearch);
}

document.addEventListener("DOMContentLoaded", initSearch);
