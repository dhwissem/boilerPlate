const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case 'RECEIVE_USERS':
      return [...action.payload];
    default:
      return state;
  }
};
