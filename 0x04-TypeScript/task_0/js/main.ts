interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "Jey",
  lastName: "Kwagala",
  age: 24,
  location: "Mutungo",
};

const student2: Student = {
  firstName: "Truth",
  lastName: "Kwagala",
  age: 1,
  location: "Nyanama",
};

const studentsList: Student[] = [student1, student2];

const table: HTMLTableElement = document.createElement("table");
const thead: HTMLTableSectionElement = document.createElement("thead");
const tbody: HTMLTableSectionElement = document.createElement("tbody");

table.style.background = "navyblue";
table.appendChild(tbody);

studentsList.forEach((student: Student): void => {
 const row: HTMLTableRowElement  = document.createElement("tr");
 const nameCell: HTMLTableDataCellElement  = document.createElement("td");
 const locationCell: HTMLTableDataCellElement = document.createElement("td");

 nameCell.textContent = student.firstName;
 locationCell.textContent = student.location;

 nameCell.style.border = "1px solid black";
 locationCell.style.border = "1px solid black";
 nameCell.style.padding = "5px";
 locationCell.style.padding = "5px";

 row.appendChild(nameCell);
 row.appendChild(locationCell);
 tbody.appendChild(row);
});

document.body.appendChild(table);
