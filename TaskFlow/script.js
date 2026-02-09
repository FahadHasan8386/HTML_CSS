function addTask() {

    console.log("Add button clicked");

    const input = document.getElementById("taskInput");
    console.log("Input element:", input);

    const taskText = input.value.trim();
    console.log("User typed:", taskText);

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    const li = document.createElement("li");
    console.log("New LI created");

    li.textContent = taskText;

    li.addEventListener("click", function () {
        console.log("Task clicked");
        li.classList.toggle("completed");
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";

    deleteBtn.addEventListener("click", function (e) {
        console.log("Delete button clicked");
        e.stopPropagation();
        li.remove();
    });

    li.appendChild(deleteBtn);
    document.getElementById("taskList").appendChild(li);

    input.value = "";
}
