import React from 'react';

import Task from "../task/task";
import TaskForm from "../taskForm/taskForm";
import Timer from '../timer/timer';
import Button from '@mui/material/Button';

import "./task-list.css";
import { useDispatch } from 'react-redux';
import { sortTasksByCreationDate, sortTasksByStatus } from '../taskSlice';

function TaskList({listOfTasks}){
    const dispatch = useDispatch();

    return (
        <>
            <div id="taskOptions">
                <div id="taskHeader">
                    <h1>New Task</h1>
                    <TaskForm />
                </div>
                <Timer />
                <div className="sortOptions">
                    <Button variant="contained" type="button" alt="Sort Task By Status" onClick={() => dispatch(sortTasksByStatus({property: "status", ascending: true}))}>Sort By Status</Button>
                    <Button variant="contained" type="button" alt="Sort Task By Creation Date" onClick={() => dispatch(sortTasksByCreationDate({property: "creationDate", ascending: false}))}>Sort By Creation Date</Button>
                </div>
            </div>
            <div id="taskContainer">
                <div className="taskList">
                    <ul className="tasks">
                        {
                            listOfTasks.length > 0 ? listOfTasks.map((task, index) => (
                                <Task  
                                    key={index}
                                    index={index}
                                    task={task}
                                />
                            )) : <span></span>
                        }
                    </ul>
                </div>
            </div>
        </>
    );
}

export default TaskList;