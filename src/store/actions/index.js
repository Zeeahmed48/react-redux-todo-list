import { v4 as uuidv4 } from 'uuid';

export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';

export const addTodo = (todo) => {
  return {
    type: ADD_TODO,
    payload: {
      id: uuidv4(),
      todo: todo,
    },
  };
};
export const deleteTodo = (id) => {
  return {
    type: 'DELETE_TODO',
    payload: {
      id: id,
    },
  };
};
