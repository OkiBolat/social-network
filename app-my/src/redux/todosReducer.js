const ADD_TODOS = 'ADD_TODOS';
// const SET_TODOS = 'SET_TODOS';
const DELETE_TODOS = 'DELETE_TODOS';
// const DRAG_TODOS = 'DRAG_TODOS';



const initialState = [
  {
    name: '1 board',
    id: 1,
    items: []
  },
  {
    name: '2 board',
    id: 2,
    items: []
  },
  {
    name: '3 board',
    id: 3,
    items: []
  },
  {
    name: '4 board',
    id: 4,
    items: []
  }
]


const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODOS:
      return state.map(r => {
          if (r.id === action.payload.row) {
            r.items.push(action.payload)
          }
          return r
        });
    case DELETE_TODOS:
      const deleteItemId = action.payload.id
      return state.map(row => {
          if(row.id === action.payload.row){
            
            return {...row, items:row.items.filter(item => item.id !== deleteItemId)}
            
          }
          return row
        });
      // case DRAG_TODOS: 
      //  return state.map(row => {
      //    if(row.id === action.payload.row) {

      //    }
      //  })
      

    default:
      return [
        ...state
      ]
  }
}

export const addTodosAC = (payload) => ({
  type: ADD_TODOS,
  payload
})

export const deleteTodosAC = (payload) => ({
  type: DELETE_TODOS,
  payload
})



export default todosReducer;





