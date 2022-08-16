import appReducer, { actionsApp } from './reducer-app';

const state = {
  isInitialized: false,
  isUpdating:    false,
};

it('App should be initialized', () => {
  const action = actionsApp.appInitialized(true);
  const newState = appReducer(state, action);
  expect(newState.isInitialized).toBeTruthy();
});

it('App updating should be started', () => {
  const action = actionsApp.appIsUpdating(true);
  const newState = appReducer(state, action);
  expect(newState.isUpdating).toBeTruthy();
});
