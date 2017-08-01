const initialState = {
  activeTab: 'Not Selected',
  rentalFilter: '',
  userFilter: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE-TAB':
      return { ...state, activeTab: action.payload };
    case 'SET-RENTAL-FILTER':
      return { ...state, rentalFilter: action.payload };
    case 'SET-USER-FILTER':
      return { ...state, userFilter: action.payload };
    default:
      return state;
  }
};
