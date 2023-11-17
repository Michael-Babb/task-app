import { render, screen } from '@testing-library/react';
import TaskList from './task-list';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

beforeEach(() => {
    const mockStore = configureStore();
    let store = mockStore();

    const preloadedData = {
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
      store = mockStore(preloadedData.value);

    render(
        <Provider store={store}>
            <TaskList listOfTasks={store.getState()}/>
        </Provider> 
    );
  });

test('Checks if the Task List title has been rendered', () => {
  const taskListElement = screen.getByText("New Task");
  expect(taskListElement).toBeInTheDocument();
});

test('Checks if multiple tasks have been generated', () =>{
  const taskElements = screen.getAllByText('Description:');
  expect(taskElements.length).toBe(4);
});

test('Checks to see if the Sort By buttons have rendered', () => {
  const sortByStatus = screen.getByText('Sort By Status');
  const sortByCreationDate = screen.getByText('Sort By Creation Date');
  expect(sortByStatus).toBeInTheDocument();
  expect(sortByCreationDate).toBeInTheDocument();
});
