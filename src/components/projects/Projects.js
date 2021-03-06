import React, { useContext, useEffect } from 'react';
import Sidebar from '../layout/Sidebar';
import Header from '../layout/Header';
import TaskForm from '../tasks/TaskForm';
import TasksList from '../tasks/TasksList';
import AuthContext from '../../context/auth/authContext';


const Projects = () => {

    // Destructure auth data
    const authContext = useContext(AuthContext);
    const { authenticatedUser } = authContext;

    useEffect(() => {
        authenticatedUser();
        // eslint-disable-next-line
    }, [])
    return ( 
        <div className="container-app">
            <Sidebar />
            <div className="main-section">
                <Header />
                <main>
                    <TaskForm />
                    
                    <div className="container-tasks">
                        <TasksList />
                    </div>
                </main>
            </div>
        </div>
     );
}
 
export default Projects;