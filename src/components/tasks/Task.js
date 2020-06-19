import React, { useContext } from 'react';
import taskContext from '../../context/tasks/taskContext';
import projectContext from '../../context/projects/projectContext';

const Task = ({ task }) => {

    // Current Project State
    const projectsContext = useContext(projectContext);
    const { project } = projectsContext;

    // Task functions
    const tasksContext = useContext(taskContext);
    const { deleteTask, getTasks, changeStateTask, saveCurrentTask } = tasksContext;

    const[ currentProject ] = project;
    // User click delete task
    const taskDelete = id => {
        deleteTask(id, currentProject._id);
        getTasks(currentProject.id);
    }
    
    // Changes Task state
    const changeState = task => {
        if(task.state) {
            task.state =false;
        } else {
            task.state = true;
        }

        changeStateTask(task);
    }

    // Selects currentTask when user clicks edit
    const selectTask = task => {
        saveCurrentTask(task);
    }

    return (  

        <li className="task shadow">
            <p>{task.name}</p>

            <div className="state">
                {task.state 
                    ? 
                        (
                            <button
                                type="button"
                                className="complete"
                                onClick={() => changeState(task)}
                            >
                                Complete
                            </button>
                        )
                    :
                    (
                        <button
                            type="button"
                            className="incomplete"
                            onClick={() => changeState(task)}
                        >
                            InComplete
                        </button>
                    )
                }
            </div>

            <div className="actions">
                <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => selectTask(task)}
                >
                    Edit
                </button>

                <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => taskDelete(task._id)}
                >
                    Delete    
                </button>
            </div>
        </li>
    );
}
 
export default Task;