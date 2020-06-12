import React, { useContext, useState } from 'react';
import projectContext from '../../context/projects/projectContext';
import taskContext from '../../context/tasks/taskContext';

const Taskform = () => {

    // Current Project State
    const projectsContext = useContext(projectContext);
    const { project } = projectsContext;

    // addTask function
    const tasksContext = useContext(taskContext);
    const { addTask } = tasksContext;



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

        // Add task to state
        task.projectId = currentProject.id;
        task.state = false;
        addTask(task);
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
                        value="Add Task" 
                    />    
                </div>
            </form>
        </div>
     );
}
 
export default Taskform;