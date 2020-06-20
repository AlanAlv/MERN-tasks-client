import React, { useReducer } from 'react'
import TaskContext from './taskContext';
import TaskReducer from './taskReducer';

import {
    TASKS_PROJECT,
    ADD_TASK,
    VALIDATE_TASK,
    DELETE_TASK,
    CURRENT_TASK,
    UPDATE_TASK,
    CLEAR_TASK
} from '../../types'

import clientAxios from '../../config/axios';


const TaskState = props => {
    const initialState = {
        tasksProject: [],
        errorTask: false,
        selectedTask: null
    
    }

    // Dispatch and state
    const [state, dispatch] = useReducer(TaskReducer, initialState);

    // Get tasks by projectId
    const getTasks = async project => {
        try {
            const result = await clientAxios.get('/api/tasks', { params: { project}});
            console.log(result);
            dispatch({
                type: TASKS_PROJECT,
                payload: result.data.tasks
            })
        } catch (error) {
            
        }
    }

    // Add task to selected project
    const addTask = async task => {
        const result = await clientAxios.post('/api/tasks', task);
        console.log(result);
        try {
            dispatch({
                type: ADD_TASK,
                payload: task
            })  
        } catch (error) {
            console.log(error);
        }

    }

    // Validate & show error
    const validateTask = () => {
        dispatch({
            type: VALIDATE_TASK
        })
    }

    // Delete Task by id
    const deleteTask = async (id, project) => {
        try {
            await clientAxios.delete(`/api/tasks/${id}`, {params: {project}});
            dispatch({
                type: DELETE_TASK,
                payload: id
            })
        } catch (error) {
            console.log(error);
        }
    }

    // Current task for edit
    const saveCurrentTask = task => {
        dispatch({
            type: CURRENT_TASK,
            payload: task
        })
    }

    // Edits task
    const updateTask = async task => {  
            try {
                const result = await clientAxios.put(`/api/tasks/${task._id}`, task);
                console.log(result);
                dispatch({
                    type: UPDATE_TASK,
                    payload: result.data.task
                })
            } catch (error) {
                console.log(error);
            }

    }
        
    // Clears selected task
    const clearTask = () => {
        dispatch({
            type: CLEAR_TASK
        })
    }
    return(
        <TaskContext.Provider
            value={{
                tasksProject: state.tasksProject,
                errorTask: state.errorTask,
                selectedTask: state.selectedTask,
                getTasks,
                addTask,
                validateTask,
                deleteTask,
                saveCurrentTask,
                updateTask,
                clearTask
            }}
        >
            {props.children}
        </TaskContext.Provider>
    )
}

export default TaskState;

