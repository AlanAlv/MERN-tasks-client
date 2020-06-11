import React, { useContext} from 'react';
import projectContext from '../../context/projects/projectContext';

const Taskform = () => {

    // Current Project State
    const projectsContext = useContext(projectContext);
    const { project } = projectsContext;

    // No current project
    if (!project) return null;

    return ( 
        <div className="form">
            <form 
            >
                <div className="container-input">
                    <input 
                        type="text" 
                        className="input-text"
                        placeholder="Task Name"
                        name="name"    
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