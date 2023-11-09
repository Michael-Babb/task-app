import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';


import { deleteTask, toggleStatus, makeEditable, updateTaskTitle, updateTaskDescription } from '../taskSlice';
import './task.css';


function Task({index}){
    const dispatch = useDispatch()
    const individualTaskData = useSelector(state => state.taskData.value)
    let titleHolder = "";
    let descriptionHolder = "";
    let statusIcon = "";

    if(individualTaskData[index].status){
        statusIcon = <AutorenewIcon />
    } else {
        statusIcon = <TaskAltIcon />;
    }

    const handleTitleChange = (e) => {
        titleHolder = e.target.value;
    }

    const handleDescriptionChange = (e) => {
       descriptionHolder = e.target.value;
    }

    return (
        <li key={index} className={`individualTask ${individualTaskData[index].status ? "completeTask" : "pendingTask"}`}>
            <div class="container">
                <p className="taskTitle">{individualTaskData[index].title}</p>
                <span className="taskDescription">Description: {individualTaskData[index].description}</span>
                <span className='taskCreationDate'>Creation Date: {individualTaskData[index].creationDate}</span>
                <span className='taskStatus'>Status: {`${individualTaskData[index].status ? "Complete" : "Pending"}`}</span>
                <div className={`updateTaskData ${individualTaskData[index].makeEditable ? "editTask" : "pendingTask"}`}>
                    <div className='updateTaskTitle'>
                        <label>
                            Update Title
                        </label>    
                        <input type="text" onChange={handleTitleChange}></input>  
                        <Button variant="contained" onClick={() => dispatch(updateTaskTitle([titleHolder,index]))}><SaveIcon /></Button>
                    </div>
                    <div className='updateTaskDescription'>
                        <label>
                            Update Description
                        </label>   
                        <input type="text" onChange={handleDescriptionChange}></input>
                        <Button variant="contained" onClick={() => dispatch(updateTaskDescription([descriptionHolder,index]))}><SaveIcon /></Button>
                    </div>
                </div>
            </div>
            <div class="taskButtons">
                <Button variant="contained" onClick={() => dispatch(makeEditable(index))}>{<EditIcon />}</Button>
                <Button variant="contained" onClick={() => dispatch(toggleStatus(index))}>{statusIcon}</Button>
                <Button variant="contained" onClick={() => dispatch(deleteTask(index))}>{<DeleteIcon />}</Button>
            </div>
        </li>
    );
}

export default Task;