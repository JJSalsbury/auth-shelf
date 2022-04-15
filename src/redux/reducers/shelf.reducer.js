// Used to store shelf items returned from the server
const shelf = (state = [], action) => {
    switch (action.type) {
        case 'SET_ITEMS':
            return action.payload;
        default:
            return state;
    }
};



export default shelfReducer;