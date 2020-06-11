import React, { useContext, useEffect } from 'react';
import Project from './Project';
import projectContext from '../../context/projects/projectContext';

const ProjectsList = () => {

    // Destructure projects from initial state
    const projectsContext = useContext(projectContext);
    const { projects, getProjects } = projectsContext;

    // Get Projects on load
    useEffect(() => {
        getProjects();
    }, [])


    // Validate if there are projects
    if (projects.length === 0) return null;


    return ( 
        <ul className="projects-list">
            {projects.map(project => (
                <Project 
                    key={project.id}
                    project={project}
                />
            ))}
        </ul>
     );
}
 
export default ProjectsList;