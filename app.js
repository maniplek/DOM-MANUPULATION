const onSubmit = () => {
    const name = document.querySelector('#name')
    const date = document.querySelector('#date')
    const completed = document.querySelector('#completed')
    const todos = document.querySelector('#todos')
    
    const div = document.createElement('div')
    const p = document.createElement('p')
    const h = document.createElement('span')
    p.textContent = " - " + date.value;
    h.textContent =  name.value;
    div.appendChild(h)
    div.appendChild(p)
    todos.appendChild(div)
    div.classList.add('todos_item')

    if (completed.checked) {
      div.classList.add('completed')
      h.classList.add('completed-name')
    }
    
    name.value = ''
    date.value = ''
    completed.checked = false
  }
  
  const button = document.querySelector('#submitBtn')
  button.addEventListener('click', onSubmit)