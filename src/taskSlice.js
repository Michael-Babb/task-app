import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [
    {           
        "title":"Task 1",        
        "description":"This is task 1 description",
        "creationDate": "10/25/2023",
        "status": false,
        "makeEditable": false
     },
     {           
      "title":"Task 2",        
      "description":"This is task 2 description",
      "creationDate": "10/29/2023",
      "status": false,
      "makeEditable": false
      },
      {           
      "title":"Task 3",        
      "description":"This is task 3 description",
      "creationDate": "11/01/2023",
      "status": true,
      "makeEditable": false
      },   
      {           
       "title":"Task 4",        
       "description":"This is task 4 description",
       "creationDate": "11/02/2023",
       "status": true,
       "makeEditable": false
       }
  ]
}

export const taskSlice = createSlice({
  name: 'taskData',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.value.push(action.payload);
    },
    deleteTask: (state, action) => {
      state.value.splice(action.payload, 1);
    },
    updateTaskTitle: (state, action) => {
      state.value[action.payload[1]].title = action.payload[0];
    },
    updateTaskDescription: (state, action) => {
      state.value[action.payload[1]].description = action.payload[0];
    },
    toggleStatus: (state, action) => {
      state.value[action.payload].status = !state.value[action.payload].status;
    },
    makeEditable: (state, action) => {
      state.value[action.payload].makeEditable = !state.value[action.payload].makeEditable;
    },
    sortTasksByStatus: (state, action) => {
      const {property, ascending } = action.payload;
      state.value.sort((a,b) => {
        if(ascending){
          return a[property] - b[property];
        } else {
          return b[property] - a[property];
        }
      })
    },
    sortTasksByCreationDate: (state,action) => {
      const {property, ascending } = action.payload;
      state.value.sort((a,b) => {
        const dateA = new Date(a[property]);
        const dateB = new Date(b[property]);
        if(ascending){
          return dateA - dateB;
        } else {
          return dateB - dateA;
        }
      })
    },
  },
})

export const { addTask, deleteTask, toggleStatus, makeEditable, updateTaskTitle, updateTaskDescription, sortTasksByStatus, sortTasksByCreationDate} = taskSlice.actions

export default taskSlice.reducer