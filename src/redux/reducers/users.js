const initialState = {
  users: []
};

export default (state = initialState, action) =>  {
  switch (action.type) {
    case 'RECEIVE_USERS':
      console.log(action.payload)
      return [...action.payload];
    default:
      return state;
  }
}
