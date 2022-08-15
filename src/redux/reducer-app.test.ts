import appReducer, { actionsApp } from './reducer-app';

it('App should be initialized', () => {
  const state = {
    isInitialized: false,
    isUpdating:    false,
  };
  const action = actionsApp.appInitialized(true);
  const newState = appReducer(state, action);
  expect(newState.isInitialized).toBe(true);

});
