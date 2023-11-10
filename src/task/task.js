import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import TextField from '@mui/material/TextField';

import { deleteTask, toggleStatus, makeEditable, updateTaskTitle, updateTaskDescription } from '../taskSlice';
import './task.css';

function Task({index}){
    const dispatch = useDispatch();
    const individualTaskData = useSelector(state => state.taskData.value);
    let titleHolder = "";
    let descriptionHolder = "";
    let statusIcon = "";

    const handleTitleChange = (e) => {
        titleHolder = e.target.value;
    }

    const handleDescriptionChange = (e) => {
       descriptionHolder = e.target.value;
    }

    if(individualTaskData[index].status){
        statusIcon = <AutorenewIcon />;
    } else {
        statusIcon = <TaskAltIcon />;
    }
   
    return (
        <li key={index} className={`individualTask ${individualTaskData[index].status ? "completeTask" : "pendingTask"}`}>
            <div class="container">
                <p className="taskTitle">{individualTaskData[index].title}</p>
                <p className="taskDescription"><b>Description:</b> {individualTaskData[index].description}</p>
                <p className='taskCreationDate'><b>Creation Date:</b> {individualTaskData[index].creationDate}</p>
                <p className='taskStatus'><b>Status:</b> {`${individualTaskData[index].status ? "Complete" : "Pending"}`}</p>
                <div className={`updateTaskData ${individualTaskData[index].makeEditable ? "editTask" : "pendingTask"}`}>
                    <div className='updateTaskTitle'>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="updateTaskName"
                            label="New Title"
                            name="updateTaskName"
                            autoComplete="updateTaskName"
                            autoFocus
                            onChange={handleTitleChange}
                        />
                        <Button variant="contained" alt="Save Title" onClick={() => dispatch(updateTaskTitle([titleHolder,index]))}><SaveIcon /></Button>
                    </div>
                    <div className='updateTaskDescription'>
                        <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="updateTaskDescription"
                                label="New Description"
                                name="updateTaskDescription"
                                autoComplete="updateTaskDescription"
                                autoFocus
                                onChange={handleDescriptionChange}
                            />
                        <Button variant="contained" alt="Save Description" onClick={() => dispatch(updateTaskDescription([descriptionHolder,index]))}><SaveIcon /></Button>
                    </div>
                </div>
            </div>
            <div class="taskButtons">
                <Button variant="contained" alt="Edit Task" onClick={() => dispatch(makeEditable(index))}>{<EditIcon />}</Button>
                <Button variant="contained" alt="Toggle Status" onClick={() => dispatch(toggleStatus(index))}>{statusIcon}</Button>
                <Button variant="contained" alt="Delete Task" onClick={() => dispatch(deleteTask(index))}>{<DeleteIcon />}</Button>
            </div>
        </li>
    );
}

export default Task;