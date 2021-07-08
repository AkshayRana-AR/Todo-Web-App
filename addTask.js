let title = document.getElementById("title");
let description = document.getElementById("description");
let enddate = document.getElementById("enddate");
let status = document.getElementById("status");
let submitbtn = document.getElementById("submitbtn");

submitbtn.addEventListener("click", submit_data);

let todos = [];

function submit_data() {
  let titletxt = title.value;
  let descriptiontxt = description.value;
  let enddatetxt = enddate.value;
  let statustxt = status.value;

  const storedTodo = localStorage.getItem('todos');
  if (titletxt == "" || descriptiontxt == "" || enddatetxt == "") {
    if (titletxt == "") {
      document.getElementById("title_msg").innerHTML = "*required";
    }
    if (descriptiontxt == "") {
      document.getElementById("description_msg").innerHTML = "*required";
    }
    if (enddatetxt == "") {
      document.getElementById("enddate_msg").innerHTML = "*required";
    }

  }
  else {
    if (sessionStorage.length != 0) {

      todos = JSON.parse(storedTodo);
      let key = sessionStorage.getItem("todo_number");

      let todo = { json_title: titletxt, json_description: descriptiontxt, json_enddate: enddatetxt, json_status: statustxt };

      todos[key] = todo;
      localStorage.setItem('todos', JSON.stringify(todos));
      sessionStorage.clear();
      location.href = "index.html";

    }
    else {
      if (storedTodo) {
        todos = JSON.parse(storedTodo);
      }
      let todo = { json_title: titletxt, json_description: descriptiontxt, json_enddate: enddatetxt, json_status: statustxt };
      todos.push(todo);

      localStorage.setItem('todos', JSON.stringify(todos));
      location.href = "index.html";
    }
  }
}

function edit_check() {
  console.log(sessionStorage.length);
  if (sessionStorage.length != 0) {
    let key = sessionStorage.getItem("todo_number");
    console.log(key);
    let arr = JSON.parse(localStorage.getItem("todos"));
    let obj = arr[key];

    let title_edit = obj.json_title;
    let description_edit = obj.json_description;
    let enddate_edit = obj.json_enddate;
    let status_edit = obj.json_status;
    fill_data(title_edit, description_edit, enddate_edit, status_edit);
  }
}
edit_check();

function fill_data(title_edit, description_edit, enddate_edit, status_edit) {
  document.getElementById("title").value = title_edit;
  document.getElementById("description").innerHTML = description_edit;
  document.getElementById("enddate").value = enddate_edit;
  document.getElementById("status").value = status_edit;
}
