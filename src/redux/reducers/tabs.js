const initialState = {
  activeTab: 'Not Selected'
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE-TAB':
      return { activeTab: action.payload };
    default:
      return state;
  }
}
