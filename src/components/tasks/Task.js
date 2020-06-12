import React, { useContext } from 'react';
import taskContext from '../../context/tasks/taskContext';

const Task = ({ task }) => {

    // Task functions
    const tasksContext = useContext(taskContext);
    const { deleteTask, getTasks } = tasksContext;


    // User click delete task
    const taskDelete = id => {
        deleteTask(id);
        getTasks(task.projectId);
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
                            >
                                Complete
                            </button>
                        )
                    :
                    (
                        <button
                            type="button"
                            className="incomplete"
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
                >
                    Edit
                </button>

                <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => taskDelete(task.id)}
                >
                    Delete    
                </button>
            </div>
        </li>
    );
}
 
export default Task;