import React, { Fragment, useState } from 'react';

const NewProject = () => {

    // Project State
    const [ project, saveProject ] = useState({
        name:''
    });

    // Destructure project name
    const { name } = project;

    const onSubmitProject = e => {
        e.prevent.Default();
    }

    // Read inputs
    const onChangeProject = e => {
        saveProject({
            ...project,
            [e.target.name] : e.target.value
        })
    }

    return ( 
        <Fragment>
            <button
                type="button"
                className="btn btn-block btn-primary"
            >
                New Project
            </button>

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
        </Fragment>
     );
}
 
export default NewProject;
