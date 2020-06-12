import React, { Fragment, useContext } from 'react';
import Task from './Task';
import projectContext from '../../context/projects/projectContext';

const TasksList = () => {

    // Current Project State
    const projectsContext = useContext(projectContext);

    const { project, deleteProject } = projectsContext;

    // No current project
    if (!project) return <h2>Select a project</h2>

    // Destructure current project
    const [ currentProject ] = project

    const tasksProject = [];

    const onClickDelete = () => {
        deleteProject(currentProject.id)
    }

    return ( 
        <Fragment>
            <h2>Project:  {currentProject.name}</h2>

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

            <button
                type="button"
                className="btn btn-delete"
                onClick={onClickDelete}
            >
                Delete Project &times;
            </button>
        </Fragment>
     );
}
 
export default TasksList;