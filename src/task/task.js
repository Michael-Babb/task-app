import React from 'react';
import { useDispatch } from 'react-redux';

import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import TextField from '@mui/material/TextField';

import { deleteTask, toggleStatus, makeEditable, updateTaskTitle, updateTaskDescription  } from '../taskSlice';
import './task.css';

function Task({index, task}){
    const dispatch = useDispatch();
    let titleHolder = "";
    let descriptionHolder = "";

    const handleTitleChange = (e) => {
        titleHolder = e.target.value;
    }

    const handleDescriptionChange = (e) => {
       descriptionHolder = e.target.value;
    }

    return (
        <li key={index} className={`individualTask ${task.status ? "completeTask" : "pendingTask"}`}>
            <div className="container">
                <p className="taskTitle">{task.title}</p>
                <p className="taskDescription"><b>Description:</b> {task.description}</p>
                <p className='taskCreationDate'><b>Creation Date:</b> {task.creationDate}</p>
                <p className='taskStatus'><b>Status:</b> {`${task.status ? "Complete" : "Pending"}`}</p>
                <div className={`updateTaskData ${task.makeEditable ? "editTask" : "pendingTask"}`}>
                    <div className='updateTaskTitle'>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            className="updateTaskName"
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
                                className="updateTaskDescription"
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
            <div className="taskButtons">
                <Button variant="contained" alt="Edit Task" disabled={task.status ? true : false} onClick={() => dispatch(makeEditable(index))}>{<EditIcon />}</Button>
                <Button variant="contained" alt="Toggle Status"  disabled={task.makeEditable ? true : false}onClick={() => dispatch(toggleStatus(index))}>{task.status ? <AutorenewIcon /> : <TaskAltIcon />}</Button>
                <Button variant="contained" alt="Delete Task" onClick={() => dispatch(deleteTask(index))}>{<DeleteIcon />}</Button>
            </div>
        </li>
    );
}

export default Task;