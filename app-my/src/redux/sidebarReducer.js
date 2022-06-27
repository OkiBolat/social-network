
const initialState = {
    friends: [
      {
        name: 'Yunus',
        friends: true
      },
      {
        name: 'Adlan',
        friends: true
      },
      {
        name: 'Hampash',
        friends: true
      },
    ]
};

const  sidebarReducer = (state = {...initialState}, action) => {
 return state
};

export default sidebarReducer;