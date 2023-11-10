import React from 'react';

import Task from "../task/task";
import TaskForm from "../taskForm/taskForm";
import Timer from '../timer/timer';
import "./task-list.css";

function TaskList({listOfTasks}){
    return (
        <>
            <div id="taskOptions">
                <div id="taskHeader">
                    <h1>New Task</h1>
                    <TaskForm />
                </div>
                <Timer />
            </div>
            <div id="taskContainer">
                <div className="taskList">
                    <ul className="tasks">
                        {
                            listOfTasks.map((task, index) => (
                                <Task  
                                    key={index}
                                    index={index}
                                />
                            ))
                        }
                    </ul>
                </div>
            </div>
        </>
    );
}

export default TaskList;