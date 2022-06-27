const SEND_MESSAGE = 'SEND_MESSAGE';

const initialState = {
  messagesData: [
    { message: 'Hello', id: 1 },
    { message: 'How are you?', id: 2 },
    { message: 'very well', id: 1 },
    { message: 'good!', id: 2 },
  ],
  dialogsData: [
    { name: 'Elbi', id: 1 },
    { name: 'Mansur', id: 2 },
    { name: 'Bulat', id: 3 },
    { name: 'Alhast', id: 4 },
  ],
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      return {
        ...state,
        messagesData: [...state.messagesData, { message: action.newMessageBody, id: 2 }]
      }
    default:
      return state;

  }
};

export const addMessageActionCreator = (newMessageBody) => ({ type: SEND_MESSAGE, newMessageBody });

export default dialogsReducer;


