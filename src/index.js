document.addEventListener("DOMContentLoaded", () => {
  document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault()
    buildToDo(e.target.new_task_description.value)
  })
});

function buildToDo(todo){
  let li = document.createElement("li");
  let btn = document.createElement('button');
  let menu = document.createElement('select');
  li.textContent = `${todo}   `;
  document.getElementById('tasks').appendChild(li);
  menu.appendChild(new Option('high priority'));
  menu.appendChild(new Option('medium priority'));
  menu.appendChild(new Option('low priority'));
  li.appendChild(menu);
  btn.addEventListener('click', handleDelete);
  btn.textContent = 'x';
  li.appendChild(btn);
  menu.options[0].addEventListener('click', handleHigh);
  menu.options[1].addEventListener('click', handleMedium);
  menu.options[2].addEventListener('click', handleLow);
}

function handleDelete(e) {
  e.target.parentNode.remove();
}

function handleHigh(e) {
  e.target.parentNode.parentNode.style.color = "red";
}

function handleMedium(e) {
  e.target.parentNode.parentNode.style.color = "yellow";
}

function handleLow(e) {
  e.target.parentNode.parentNode.style.color = "green";
}


