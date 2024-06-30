import { DELETE_TODO } from './actionTypes';

export const deleteTodo = (id) => ({
    type: DELETE_TODO,
    payload: id,
});
