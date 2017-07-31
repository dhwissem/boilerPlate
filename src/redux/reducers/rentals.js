const initialState = {
  rentals: []
};

export default (state = initialState, action) =>  {
  switch (action.type) {
    case 'RECEIVE_RENTALS':
      console.log(action.payload)
      return [...action.payload];
    default:
      return state;
  }
}
