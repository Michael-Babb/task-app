import React from "react";
import { useDispatch } from 'react-redux';

import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import TextField from '@mui/material/TextField';

import { addTask, sortTasksByCreationDate, sortTasksByStatus } from '../taskSlice';
import './taskForm.css'

function TaskForm(){
    const dispatch = useDispatch();

    function getDate() {
        const today = new Date();
        const month = today.getMonth() + 1;
        const year = today.getFullYear();
        const date = today.getDate();

        return `${month}/${date}/${year}`;
      }

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
                    <Button variant="contained" type="submit" alt="Add Task">{<AddIcon />}</Button>
                </form>
            </div>
            <div className="sortOptions">
                <Button variant="contained" type="button" alt="Sort Task By Status" onClick={() => dispatch(sortTasksByStatus({property: "status", ascending: true}))}>Sort By Status</Button>
                <Button variant="contained" type="button" alt="Sort Task By Creation Date" onClick={() => dispatch(sortTasksByCreationDate({property: "creationDate", ascending: false}))}>Sort By Creation Date</Button>
            </div>
        </>
    );
}

export default TaskForm;