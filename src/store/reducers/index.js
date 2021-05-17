import { ADD_TODO, DELETE_TODO } from '../actions';

const initialState = { todoList: [] };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      const { todo, id } = action.payload;
      return {
        ...state,
        todoList: [
          ...state.todoList,
          {
            id: id,
            todo: todo,
          },
        ],
      };
    case DELETE_TODO:
      const tempList = state.todoList.filter(
        (todo) => todo.id !== action.payload.id
      );
      return {
        ...state,
        todoList: tempList,
      };
    default:
      return state;
  }
};

export default reducer;
