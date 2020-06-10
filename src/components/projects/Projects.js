import React from 'react';
import Sidebar from '../layout/Sidebar';
import Header from '../layout/Header';
import TaskForm from '../tasks/TaskForm';
import TasksList from '../tasks/TasksList';


const Projects = () => {
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