import React, { useContext } from 'react'
import projectContext from '../../context/projects/projectContext';
import taskContext from '../../context/tasks/taskContext';

const Project = ({ project }) => {

    // Current Project State
    const projectsContext = useContext(projectContext);
    const { currentProject } = projectsContext;

    const tasksContext = useContext(taskContext);
    const { getTasks } = projectsContext;

    const selectProject = id => {
        currentProject(id); // Set current project
        getTasks(id); // Filter tasks by id
    }

    return (
        <li>
            <button
                type="button"
                className="btn btn-blank"
                onClick={() => selectProject(project.id)}
            >
                {project.name}
            </button>
        </li>
      );
}
 
export default Project;