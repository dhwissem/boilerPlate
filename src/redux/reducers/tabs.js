const initialState = {
  activeTab: ''
};

export default (state = initialState, action) =>  {
  switch (action.type) {
    case 'UPDATE-TAB':
      return {activeTab: action.payload};
    default:
      return state;
  }
}
