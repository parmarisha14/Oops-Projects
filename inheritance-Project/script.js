
  class Employee {
    constructor(name, gender, age) {
      this.name = name;
      this.gender = gender;
      this.age = age;
    }
  }

  class ExtendedEmployee extends Employee {
    constructor(name, gender, age, owner, type) {
      super(name, gender, age);
      this.owner = owner;
      this.type = type;
    }
  }

  function addEmployee() {
    const name = document.getElementById("name").value.trim();
    const gender = document.getElementById("gender").value;
    const age = document.getElementById("age").value.trim();
    const owner = document.getElementById("owner").value.trim();
    const type = document.getElementById("type").value.trim();

    if (!name || !gender || !age) {
      alert("Please fill in Name, Gender, and Age.");
      return;
    }

    const emp = new ExtendedEmployee(name, gender, age, owner, type);
    const table = document.getElementById("employeeTable").getElementsByTagName("tbody")[0];
    const newRow = table.insertRow();
    newRow.innerHTML = `
      <td>${emp.name}</td>
      <td>${emp.gender}</td>
      <td>${emp.age}</td>
      <td>${emp.owner}</td>
      <td>${emp.type}</td>
      <td><button class="btn btn-danger btn-sm" onclick="deleteRow(this)">Delete</button></td>
    `;

    document.querySelectorAll("input, select").forEach(el => el.value = "");
  }

  function deleteRow(button) {
    const row = button.closest("tr");
    row.remove();
  }

