import { render, screen, fireEvent } from '@testing-library/react';
import Timer from './timer';

beforeEach(() => {
  render(
    <Timer />
  );
});

test('Checks to see if the timer title has been rendered', () => {
  const timerElement = screen.getByText("Timer");
  expect(timerElement).toBeInTheDocument();
  
});

test('Checks if preset time is set at 25.0', () => {
  const presetTime = screen.getByText("25");
  expect(presetTime).toBeInTheDocument();
});

test('Checks if the timer can be started', () => {
  const presetTime = screen.getByText("25");
  fireEvent.click(screen.getByText('Start'));
  expect(presetTime).not.toBe('25');
});

test('Checks if timer can be restarted', () => {
  const presetTime = screen.getByText("25");
  fireEvent.click(screen.getByText('Start'));
  fireEvent.click(screen.getByText('Reset'));
  expect(presetTime).toBeInTheDocument();
});

test('Checks if timer buttons are displayed', () => {
  const startButton = screen.getByText("Start");
  const pauseButton = screen.getByText("Pause");
  const resetButton = screen.getByText("Reset");

  expect(startButton).toBeInTheDocument();
  expect(pauseButton).toBeInTheDocument();
  expect(resetButton).toBeInTheDocument();
});