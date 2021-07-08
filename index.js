let table = document.getElementById('notestable');

function getData() {
    let todos = [];

    const storedTodo = localStorage.getItem('todos');
    if (storedTodo) {
        todos = JSON.parse(storedTodo);
    }
    else {
        //No element present
    }
    console.log(todos);
    for (let i = 0; i < todos.length; i++) {
        let obj = todos[i];
        let title = obj.json_title;
        //console.log(title);
        let description = obj.json_description;
        let enddate = obj.json_enddate;
        let status = obj.json_status;
        addRows(title, description, enddate, status, i);
    }
}
getData();



function addRows(title, description, enddate, status, todo_number) {
    row = table.insertRow(2);
    console.log(row);
    cell1 = row.insertCell(0);
    cell2 = row.insertCell(1);
    cell3 = row.insertCell(2);
    cell4 = row.insertCell(3);
    cell5 = row.insertCell(4);
    cell6 = row.insertCell(5);

    cell1.innerHTML = title;
    cell2.innerHTML = description;
    cell3.innerHTML = enddate;
    cell4.innerHTML = status;
    cell5.innerHTML = '<img src="icons/edit.png"  width="25px" height="25px" alt="Edit" style="padding: 2px;margin: 2px;"' + ' id=' + todo_number + '" onclick="edit_task(' + todo_number + ')"></img>';
    cell6.innerHTML = '<img src="icons/delete.png"   width="30px" height="30px" alt="Edit" style="padding: 2px;margin: 2px;"' + ' id="' + todo_number + '" onclick="delete_task(' + todo_number + ')"></img>';
}

function edit_task(todo_number) {
    console.log(todo_number);
    sessionStorage.setItem("todo_number", todo_number);
    location.href = "AddTask.html";
}

function delete_task(todo_number) {
    console.log(todo_number);
    // location.href="AddTask.html";


    const storedTodo = localStorage.getItem('todos');
    let todos = [];
    todos = JSON.parse(storedTodo);
    console.log(todos.splice(todo_number, 1));

    localStorage.setItem('todos', JSON.stringify(todos));
    location.reload();
}

sessionStorage.clear();
