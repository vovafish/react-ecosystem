import { CREATE_TODO, REMOVE_TODO } from "./actions";

export const todos = (state = [], action) => {
  //function
  const { type, payload } = action;

  switch (type) {
    case CREATE_TODO: {
      //get the text from the payload
      const { text } = payload;
      const newTodo = {
        text,
        isCompleted: false,
      };
      return state.concat(newTodo);
    }
    case REMOVE_TODO: {
      const { text } = payload;
      return state.fillter((todo) => todo.text !== text);
    }
    default:
      return state;
  }
};
