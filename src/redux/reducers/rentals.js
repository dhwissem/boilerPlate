const initialState = [];

export default (state = initialState, action) =>  {
  switch (action.type) {
    case 'RECEIVE_RENTALS':
      return [...action.payload];
    default:
      return state;
  }
};
