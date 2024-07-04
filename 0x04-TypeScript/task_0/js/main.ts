export interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'John',
  lastName: 'Doe',
  age: 20,
  location: 'New York'
};

const student2: Student = {
  firstName: 'Jane',
  lastName: 'Smith',
  age: 22, 
  location: 'Los Angeles'
};

const studentsList: Student[] = [student1, student2];

const table = document.createElement('table');

const header = table.createTHead();
const headerRow = header.insertRow();
const headerCell1 = headerRow.insertCell(0);
const headerCell2 = headerRow.insertCell(1);
headerCell1.innerHTML = "FirstName";
headerCell2.innerHTML = "Location";

header.style.borderBottom = "2px solid black";

studentsList.forEach(student => {
  const row = table.insertRow();
  const cell1 = row.insertCell(0);
  const cell2 = row.insertCell(1);
  cell1.innerHTML = student.firstName;
  cell2.innerHTML = student.location;
});

document.body.appendChild(table);
