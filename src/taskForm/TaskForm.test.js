import { render, screen, fireEvent } from '@testing-library/react';
import configureStore from 'redux-mock-store';
import TaskForm from './taskForm';
import { getDate } from './taskForm';
import { Provider } from 'react-redux';

beforeEach(() => {
    const mockStore = configureStore();
    let store = mockStore();
    
    render(
        <Provider store={store}>
            <TaskForm />
        </Provider> 
    );
});

test('Check to see if task title input has rendered', () => {
    const taskTitleInput = screen.getByText('Title');
    const descriptionInput = screen.getByText('Description');
    expect(taskTitleInput).toBeInTheDocument();
    expect(descriptionInput).toBeInTheDocument();
});

test('Check if the correct date used for the task creation', () => {
    const today = new Date();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const date = today.getDate();

    expect(getDate()).toBe(`${month}/${date}/${year}`);
});


test('Checks to see if a task can be submitted', () => {
    fireEvent.change(screen.getByLabelText(/Title/), {
        target: {value: 'Test: Task Title'},
    });
    fireEvent.change(screen.getByLabelText(/Description/), {
        target: {value: 'Test: Task Description'},
    });

    fireEvent.click(screen.getByTestId('AddIcon'));
});