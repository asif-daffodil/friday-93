const taskForm = document.getElementById('taskForm');
const errTask = document.getElementById('errTask');
const showTask = document.getElementById('showTask');

taskForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(taskForm);
    const task = formData.get('task');

    if(task.trim() === '') {
        errTask.textContent = 'Please enter a task.';
        return;
    }else if (JSON.parse(localStorage.getItem('tasks'))?.some(t => t.task === task)) {
        errTask.textContent = 'Task already exists.';
        return;
    }

    addTaskToLocalStorage(task);
    loadTasksFromLocalStorage();

    errTask.textContent = '';
    taskForm.reset();
})

const loadTasksFromLocalStorage = () => {
    showTask.innerHTML = '';
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(t => {
        const li = document.createElement('li');
        li.textContent = t.task;
        li.className = 'border-b px-2 py-1 mb-1 italic text-gray-700 flex justify-between items-center';
        if(t.completed) {
            li.classList.add('line-through', 'text-gray-400');
        }
        const btnGroup = document.createElement('div');
        const checkBtn = document.createElement('button');
        checkBtn.innerHTML = '<i class="fa-solid fa-check"></i>';
        checkBtn.className = 'ml-2 text-green-500 hover:text-green-700 cursor-pointer border rounded px-1 py-0.5 text-sm';
        checkBtn.addEventListener('click', () => {
            li.classList.toggle('line-through');
            li.classList.toggle('text-gray-400');
            const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
            const taskIndex = tasks.findIndex(task => task.task === t.task);
            if(taskIndex !== -1) {
                tasks[taskIndex].completed = !tasks[taskIndex].completed;
                localStorage.setItem('tasks', JSON.stringify(tasks));
            }
        });
        const deleteBtn = document.createElement('button');
        deleteBtn.innerHTML = '<i class="fa-solid fa-trash"></i>';
        deleteBtn.className = 'ml-2 text-red-500 hover:text-red-700 cursor-pointer border rounded px-1 py-0.5 text-sm';
        deleteBtn.addEventListener('click', () => {
            li.remove();
            const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
            const updatedTasks = tasks.filter(task => task.task !== t.task);
            localStorage.setItem('tasks', JSON.stringify(updatedTasks));    
        });
        btnGroup.appendChild(checkBtn);
        btnGroup.appendChild(deleteBtn);
        li.appendChild(btnGroup);
        showTask.appendChild(li);
    });
} 

loadTasksFromLocalStorage();

const addTaskToLocalStorage = (task) => {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const newTask = {
        task,
        completed: false
    }
    tasks.push(newTask);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}