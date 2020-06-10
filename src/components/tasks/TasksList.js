import React, { Fragment } from 'react';
import Task from './Task';


const TasksList = () => {

    const tasksProject = [
        { name: 'Choose Product', state: true },
        { name: 'Choose Color', state: true },
        { name: 'Add to cart', state: true },
        { name: 'Pay Product', state: false },

    ]

    return ( 
        <Fragment>
            <h2>Project: Virtual Store</h2>

            <ul className="tasks-list">
                {tasksProject.length === 0
                    ?
                        (<li className="task">
                            <p>There are no tasks</p>
                        </li>)
                    :
                        tasksProject.map(task => (
                            <Task
                                task={task}
                            />
                        ))
                }
            </ul>
        </Fragment>
     );
}
 
export default TasksList;