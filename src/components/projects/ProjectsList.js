import React from 'react';
import Project from './Project'

const ProjectsList = () => {

    const projects = [
        {name: 'Virtual Store'},
        {name: 'Web App'},
        {name: 'Mobile App'}
    ]

    return ( 
        <ul className="projects-list">
            {projects.map(project => (
                <Project 
                    project={project}
                />
            ))}
        </ul>
     );
}
 
export default ProjectsList;