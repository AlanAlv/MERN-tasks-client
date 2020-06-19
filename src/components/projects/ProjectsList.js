import React, { useContext, useEffect } from 'react';
import Project from './Project';
import projectContext from '../../context/projects/projectContext';
import AlertContext from '../../context/alerts/alertContext';
import { CSSTransition, TransitionGroup} from 'react-transition-group';

const ProjectsList = () => {

    // Destructure projects from initial state
    const projectsContext = useContext(projectContext);
    const { message, projects, getProjects } = projectsContext;

    const alertContext = useContext(AlertContext);
    const { alert, showAlert } = alertContext

    // Get Projects on load
    useEffect(() => {
        if (message) {
            showAlert(message.msg, message.category);
        }
        getProjects();
        // eslint-disable-next-line
    }, [message]);


    // Validate if there are projects
    if (projects.length === 0) return <p>There are no projects, start a new one!</p>;


    return ( 
        <ul className="projects-list">
            {alert 
                ?
                    (
                        <div className={`alert ${alert.category}`}>
                            {alert.msg}
                        </div>
                    )
                :
                    null
            }
           <TransitionGroup>
                {projects.map(project => (
                    <CSSTransition
                        key={project._id}
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