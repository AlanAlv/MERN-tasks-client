import React, { useContext, useEffect } from 'react';
import Project from './Project';
import projectContext from '../../context/projects/projectContext';
import { CSSTransition, TransitionGroup} from 'react-transition-group';

const ProjectsList = () => {

    // Destructure projects from initial state
    const projectsContext = useContext(projectContext);
    const { projects, getProjects } = projectsContext;

    // Get Projects on load
    useEffect(() => {
        getProjects();
        // eslint-disable-next-line
    }, [])


    // Validate if there are projects
    if (projects.length === 0) return <p>There are no projects, start a new one!</p>;


    return ( 
        <ul className="projects-list">
           <TransitionGroup>
                {projects.map(project => (
                    <CSSTransition
                        key={project.id}
                        timeout={200}
                        classNames="project"
                    >
                        <Project 
                            project={project}
                        />
                    </CSSTransition>
                ))}
           </TransitionGroup>
        </ul>
     );
}
 
export default ProjectsList;