import React, { useReducer } from 'react'
import TaskContext from './taskContext';
import TaskReducer from './taskReducer';
import {
    TASKS_PROJECT,
    ADD_TASK,
    VALIDATE_TASK,
    DELETE_TASK,
    STATE_TASK
} from '../../types'

const TaskState = props => {
    const initialState = {
        tasks: [
            { id: 1, name: 'Choose Product', state: true, projectId: 1 },
            { id: 2, name: 'Choose Color', state: true, projectId: 2},
            { id: 3, name: 'Add to cart', state: true,  projectId: 3 },
            { id: 4, name: 'Pay Product', state: false, projectId: 4 },
            { id: 5, name: 'Choose Product', state: true, projectId: 3 },
            { id: 6, name: 'Choose Color', state: true, projectId: 2},
            { id: 7, name: 'Add to cart', state: true,  projectId: 1 },
            { id: 8, name: 'Pay Product', state: false, projectId: 1 }
    
        ],
        tasksProject: null,
        errorTask: false
    
    }

    // Dispatch and state
    const [state, dispatch] = useReducer(TaskReducer, initialState);

    // Get tasks by projectId
    const getTasks = projectId => {
        dispatch({
            type: TASKS_PROJECT,
            payload: projectId
        })
    }

    // Add task to selected project
    const addTask = task => {
        dispatch({
            type: ADD_TASK,
            payload: task
        })
    }

    // Validate & show error
    const validateTask = () => {
        dispatch({
            type: VALIDATE_TASK
        })
    }

    // Delete Task by id
    const deleteTask = id => {
        dispatch({
            type: DELETE_TASK,
            payload: id
        })
    }

    // Changes task state
    const changeStateTask = task => {
        dispatch({
            type: STATE_TASK,
            payload: task
        })
    }

    return(
        <TaskContext.Provider
            value={{
                tasks: state.tasks,
                tasksProject: state.tasksProject,
                errorTask: state.errorTask,
                getTasks,
                addTask,
                validateTask,
                deleteTask,
                changeStateTask
            }}
        >
            {props.children}
        </TaskContext.Provider>
    )
}

export default TaskState;

