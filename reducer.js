import { DELETE_TODO } from './actionTypes';

const initialState = {
    todos: [
        { id: 1, text: 'Sample Todo' },
        { id: 2, text: 'Another Todo' }
    ]
};

const todoReducer = (state = initialState, action) => {
    switch(action.type) {
        case DELETE_TODO:
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.payload)
            };
        default:
            return state;
    }
};

export default todoReducer;
