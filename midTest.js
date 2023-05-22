const entryForm = document.getElementById('entryform');
const EntryList = document.getElementById('ent');

entryForm.addEventListener('submit', function(event) {

    event.preventDefault();

    const entryName = document.getElementById('entry').value;

    if (entryName === '') {
        alert('fill all data')
    } else {
        const entryData = {
            name: entryName
        };

        const Data = JSON.parse(localStorage.getItem("Data")) || [];
        Data.push(entryData)
        localStorage.setItem(Data, JSON.stringify(Data));


        const entryElement = document.createElement('li');
        entryElement.innerText = entryName;
        EntryList.appendChild(entryElement);


        document.getElementById('entry').value = '';
        alert("successful")

    }

});

const summaryBTN = document.getElementById('summary ');
summaryBTN.addEventListener('click', function() {
    const Data = JSON.parse(localStorage.getItem(Data));

});


// Get references to the task form and list container
const entryForm = document.getElementById('entryform');
const entryList = document.getElementById('ent');

// Add event listener to the task form
entryForm.addEventListener('submit', function(event) {
    // Prevent default form submission behavior
    event.preventDefault();

    // Get the task name from the form input
    const entryName = document.getElementById('entry').value;

    // Display a popup to get the task details
    const taskDetails = window.prompt('Enter task details (description, date, time):');
    const [taskDescription, taskDate, taskTime] = taskDetails.split(',');

    // Generate a unique ID for the task
    const taskId = `task-${Date.now()}`;

    // Store the task data in local storage
    const taskData = { name: taskName, description: taskDescription.trim(), date: taskDate.trim(), time: taskTime.trim() };
    localStorage.setItem(taskId, JSON.stringify(taskData));

    // Create a new task element and add it to the task list
    const taskElement = document.createElement('li');
    taskElement.innerText = taskName;
    taskList.appendChild(taskElement);

    // Add event listener to task element to show/hide details
    taskElement.addEventListener('click', function() {
        const taskDetailsElement = taskElement.querySelector('.task-details');
        if (taskDetailsElement) {
            taskDetailsElement.remove();
        } else {
            // Retrieve task data from local storage and display it
            const taskData = JSON.parse(localStorage.getItem(taskId));
            const taskDetailsElement = document.createElement('div');
            taskDetailsElement.classList.add('task-details');
            taskDetailsElement.innerHTML = `<p>Description: ${taskData.description}</p><p>Date: ${taskData.date}</p><p>Time: ${taskData.time}</p>`;
            taskElement.appendChild(taskDetailsElement);
        }
    });
});