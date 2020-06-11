import React, { Fragment, useState, useContext } from 'react';
import projectContext from '../../context/projects/projectContext';

const NewProject = () => {

    // Form State
    const projectsContext = useContext(projectContext);

    const { form,formError, showForm, addProject, showError } = projectsContext;

    // Project State
    const [ project, saveProject ] = useState({
        name:''
    });

    // Destructure project name
    const { name } = project;

    // User adds project
    const onSubmitProject = e => {
        e.preventDefault();

        // Validation
        if (name === ''){
            showError();
            console.log('NOOOOOOO');
            return;
        }

        // Add to state
        addProject(project)

        // Reset form
        saveProject({
            name: ''
        })

    }

    // Read inputs
    const onChangeProject = e => {
        saveProject({
            ...project,
            [e.target.name] : e.target.value
        })
    }

    // Display Form
    const onClickForm = () => {
        showForm();
    }

    return ( 
        <Fragment>
            <button
                type="button"
                className="btn btn-block btn-primary"
                onClick={ () => onClickForm()}
            >
                New Project
            </button>

            {form
                ?
                    (
                        
                        <form  
                            onSubmit={onSubmitProject}
                            className="form-new-project"
                        >
                            <input 
                                type="text" 
                                name="name" 
                                className="input-text"
                                placeholder="New Project"
                                value={name}
                                onChange={onChangeProject}
                            />

                            <input 
                                type="submit" 
                                value="Add Project"
                                className="btn btn-primary btn-block"
                            />

                        </form>
                    )
                :
                    null
            }

            {formError 
                ? 
                    <p className="message error">The project name is required</p> 
                : 
                    null
            }

        </Fragment>
     );
}
 
export default NewProject;
