import React, { useContext, useState, useEffect } from 'react';
import projectContext from '../../context/projects/projectContext';
import taskContext from '../../context/tasks/taskContext';

const Taskform = () => {

    // Current Project State
    const projectsContext = useContext(projectContext);
    const { project } = projectsContext;

    // task functions
    const tasksContext = useContext(taskContext);
    const {selectedTask, errorTask, addTask, validateTask,
         getTasks, updateTask, clearTask } = tasksContext;

    // Detects selected task
    useEffect(() => {
        if(selectedTask !== null) {
            saveTask(selectedTask);
        } else{
            saveTask({
                name: ''
            })
        }
    }, [selectedTask])

    // Form state
    const [ task, saveTask ] = useState({
        name: ''
    })


    // Destructure project name
    const { name } = task;

    // No current project
    if (!project) return null;

    // Destructure current project
    const [ currentProject ] = project;


    const handleChange = e => {
        saveTask({
            ...task,
            [e.target.name] : e.target.value
        })
    }

    const onSubmitTask = e => {
        e.preventDefault();

        // Validation
        if(name.trim() === ''){
            validateTask();
            return;
        }

        // Checks if edit or add task
        if(selectedTask === null){
            // Add task to state
            task.projectId = currentProject.id;
            task.state = false;
            addTask(task);    
        } else {
            // Update task
            updateTask(task);

            // Clears selected task
            clearTask();
        }

        // Get and filter tasks
        getTasks(currentProject.id);

        // Reset form
        saveTask({
            name: ''
        })
    }

    return ( 
        <div className="form">
            <form 
                onSubmit={onSubmitTask}
            >
                <div className="container-input">
                    <input 
                        type="text" 
                        className="input-text"
                        placeholder="Task Name"
                        name="name"
                        value={name}
                        onChange={handleChange}    
                    />    
                </div>   

                <div className="container-input">
                    <input 
                        type="submit" 
                        className="btn btn-primary btn-submit btn-block"
                        value= {selectedTask ? "Edit Task" : "Add Task"}
                    />    
                </div>
            </form>
            {errorTask 
                ? 
                    <p className="message error">
                        The Task name is required
                    </p>
                :    
                    null
            }
        </div>
     );
}
 
export default Taskform;