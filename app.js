// Get the form and form data div elements
const form = document.getElementById('signup-form');
const formDataDiv = document.getElementById('form-data');

// Add an event listener to the form's submit event
form.addEventListener('submit', (e) => {
  // Prevent the default form submission behavior
  e.preventDefault();

  // Get the form data
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Display the form data
  formDataDiv.innerHTML = `
    <h2>Form Data:</h2>
    <p>Name: ${name}</p>
    <p>Email: ${email}</p>
    <p>Password: ${password}</p>
  `;
});

// Get all read more buttons
const readMoreButtons = document.querySelectorAll('.read-more');

// Add an event listener to each read more button
readMoreButtons.forEach((button) => {
  button.addEventListener('click', (e) => {
    // Get the full description paragraph
    const fullDescription = button.previousElementSibling;

    // Toggle the display of the full description
    fullDescription.style.display = fullDescription.style.display === 'none' ? 'block' : 'none';

    // Toggle the text of the read more button
    button.textContent = button.textContent === 'Read More' ? 'Read Less' : 'Read More';
  });
});
//  question 2
// Get the student form, table, and edit form elements
const studentForm = document.getElementById('student-form');
const studentTable = document.getElementById('student-table');
const studentTableBody = document.getElementById('student-table-body');
const editForm = document.getElementById('edit-form');

// Add an event listener to the student form's submit event
studentForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // Get the student details from the form
  const name = document.getElementById('name').value;
  const rollno = document.getElementById('rollno').value;
  const grade = document.getElementById('grade').value;

  // Create a new table row with the student details
  const newRow = document.createElement('tr');
  newRow.innerHTML = `
    <td>${name}</td>
    <td>${rollno}</td>
    <td>${grade}</td>
    <td>
      <button class="delete-btn">Delete</button>
      <button class="edit-btn">Edit</button>
    </td>
  `;

  // Add the new row to the table body
  studentTableBody.appendChild(newRow);

  // Add event listeners to the delete and edit buttons
  const deleteBtn = newRow.querySelector('.delete-btn');
  const editBtn = newRow.querySelector('.edit-btn');

  deleteBtn.addEventListener('click', () => {
    // Delete the row when the delete button is clicked
    newRow.remove();
  });

  editBtn.addEventListener('click', () => {
    // Show the edit form when the edit button is clicked
    editForm.style.display = 'block';

    // Fill the edit form with the student details
    document.getElementById('edit-name').value = name;
    document.getElementById('edit-rollno').value = rollno;
    document.getElementById('edit-grade').value = grade;
  });
});
// question 3
// Add an event listener to the edit form's submit event
editForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // Get the updated student details from the edit form
  const name = document.getElementById('edit-name').value;
  const rollno = document.getElementById('edit-rollno').value;
  const grade = document.getElementById('edit-grade').value;

  // Update the table row with the new student details
  const tableRow = editForm.closest('tr');
  tableRow.cells[0].textContent = name;
  tableRow.cells[1].textContent = rollno;
  tableRow.cells[2].textContent = grade;

  // Hide the edit form
  editForm.style.display = 'none';
});