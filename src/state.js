let state = {};

function setState(chatId, property, value) {
  if (!state[chatId]) {
    state[chatId] = {};
  }

  state[chatId][property] = value;
}

function getState(chatId, property) {
  return state[chatId]?.[property];
}

function clearState(chatId) {
  delete state[chatId];
}

export { setState, getState, clearState };
