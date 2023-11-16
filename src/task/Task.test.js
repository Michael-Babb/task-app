import { render, screen, fireEvent } from '@testing-library/react';
import configureStore from 'redux-mock-store';
import Task from './task';
import { Provider } from 'react-redux';

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
            <Task index={0} task={store.getState()[0]}/>
        </Provider> 
    );
  });

test('Checks to see if task information has rendered', () => {
    const taskTitle = screen.getByText('Task 1');
    const taskDescription = screen.getByText('This is task 1 description');
    const taskCreationDate = screen.getByText('10/25/2023');
    expect(taskTitle).toBeInTheDocument();
    expect(taskDescription).toBeInTheDocument();
    expect(taskCreationDate).toBeInTheDocument();
});

test('Checks that the title can be updated', () => {
    fireEvent.click(screen.getByTestId('EditIcon'));

    fireEvent.change(screen.getByLabelText(/New Title/), {
        target: {value: 'Test: Task Title'},
    });
    fireEvent.click(screen.getAllByTestId('SaveIcon')[0]);

    setTimeout(function() {
        const newTitle = screen.getByText('Test: Task Title');
        expect(newTitle).toBeInTheDocument();
      }, 2000);
});

test('Checks that the description can be udpated', () => {
    fireEvent.click(screen.getByTestId('EditIcon'));

    fireEvent.change(screen.getByLabelText(/New Description/), {
        target: {value: 'Test: Task Description'},
    });
    fireEvent.click(screen.getAllByTestId('SaveIcon')[1]);

    setTimeout(function() {
        const newDescription = screen.getByText('Test: Task Description');
        expect(newDescription).toBeInTheDocument();
      }, 2000);

});

test('Checks for completion button toggle', () => {
    const completeButton = screen.getByTestId('TaskAltIcon');
    expect(completeButton).toBeInTheDocument();
    fireEvent.click(completeButton);

    setTimeout(function() {
        const returnToPending = screen.getByTestId('AutorenewIcon');
        expect(returnToPending).toBeInTheDocument();
      }, 2000);
});

test('Checks for deletion of task', () => {
    fireEvent.click(screen.getByTestId('DeleteIcon'));

    setTimeout(function() {
        const exampleTask = screen.getByText('Task 1');
        expect(example).not.toBeInTheDocument();
      }, 2000);
});