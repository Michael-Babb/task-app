import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('Checks to see if the timer title has been rendered', () => {
    render(
        <App />
    );
  const appElement = screen.getByText("Task App");
  expect(appElement).toBeInTheDocument();
  
});
