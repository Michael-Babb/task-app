import React from "react";
import { useDispatch } from 'react-redux';

import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import TextField from '@mui/material/TextField';

import { addTask } from '../taskSlice';
import './taskForm.css'

function getDate() {
    const today = new Date();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const date = today.getDate();

    return `${month}/${date}/${year}`;
}

function TaskForm(){
    const dispatch = useDispatch();

    function handleSubmit(e) {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);
        const formJson = Object.fromEntries(formData.entries());
        const newTask = {
            title: formJson.taskName,
            description:formJson.taskDescription,
            creationDate: getDate(),
            status: false
        }

        dispatch(addTask(newTask));
    }

    return(
        <>
            <div className="taskForm">
                <form method="post" onSubmit={handleSubmit}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="taskName"
                        label="Title"
                        name="taskName"
                        autoComplete="taskName"
                        autoFocus
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="taskDescription"
                        label="Description"
                        name="taskDescription"
                        autoComplete="taskDescription"
                        autoFocus
                    />
                    <div className="addTaskBtnContainer"><Button variant="contained" type="submit" alt="Add_Task">{<AddIcon />}</Button></div>
                </form>
            </div>
        </>
    );
}

export { getDate };

export default TaskForm;