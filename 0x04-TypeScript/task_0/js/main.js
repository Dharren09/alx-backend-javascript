var student1 = {
    firstName: "Jey",
    lastName: "Kwagala",
    age: 24,
    location: "Mutungo"
};
var student2 = {
    firstName: "Truth",
    lastName: "Kwagala",
    age: 1,
    location: "Nyanama"
};
var studentsList = [student1, student2];
var table = document.createElement("table");
var thead = document.createElement("thead");
var tbody = document.createElement("tbody");
table.style.background = "navyblue";
table.appendChild(tbody);
studentsList.forEach(function (student) {
    var row = document.createElement("tr");
    var nameCell = document.createElement("td");
    var locationCell = document.createElement("td");
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
