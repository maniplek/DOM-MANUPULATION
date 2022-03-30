const onSubmit = () => {
    const name = document.querySelector('#name')
    const date = document.querySelector('#date')
    const completed = document.querySelector('#completed')
    const todos = document.querySelector('#todos')
    
    const div = document.createElement('div')
    const p = document.createElement('p')
    p.textContent = name.value + " - " + date.value;
    div.appendChild(p)
    todos.appendChild(div)
    
    if (completed.checked) {
      div.classList.add('completed')
      p.classList.add('completed-text')
    }
    
    name.value = ''
    date.value = ''
    completed.checked = false
  }
  
  const button = document.querySelector('#submitBtn')
  button.addEventListener('click', onSubmit)