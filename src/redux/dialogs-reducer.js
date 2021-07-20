const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
    dialogs: [
        {id: 1, name: 'Мурат'},
        {id: 2, name: 'Юлай'},
        {id: 3, name: 'Амир'},
        {id: 4, name: 'Мария'},
    ],
    messages: [
        {id: 1, message: 'Привет'},
        {id: 2, message: 'Как  дела с твоей компанией?'},
    ],
    newMessageBody: ""
};

const dialogsReducer = (state = initialState, action) => {
    let stateCopy = {
        ...state,
        messages:[...state.messages]
    }
    stateCopy.messages = [...state.messages]
   switch (action.type) {
       case UPDATE_NEW_MESSAGE_BODY:
           return  {
               ...state,
               newMessageBody: action.body
           }
       case SEND_MESSAGE: {

           let body = state.newMessageBody;
           return {
               ...state,
               newMessageBody: '',
               messages: [...state.messages,{id: 6, message: body}]
           }
       }
       default:
           return state;
   }
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) =>
    ({ type: UPDATE_NEW_MESSAGE_BODY, body: body })

export default dialogsReducer;