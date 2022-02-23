import React, { useReducer } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import Store from '../../Store';

function reducer(state, action) {
    const { todoList } = state;
    const { type, item, id } = action;

    switch (type) {
        case 'CREATE_ITEM':
            return {
                todoList: todoList.concat(item),
            };
        case 'TOGGLE_ITEM':
            return {
                todoList: todoList.map((item) =>
                    item.id === id ? { ...item, done: !item.done } : item,
                ),
            };
        case 'REMOVE_ITEM':
            return {
                todoList: todoList.filter((item) => item.id !== id),
            };
        default:
            return state;
    }
}

export const TodoDispatch = React.createContext(null);

/* To do */
function Todo() {
    const [state, dispatch] = useReducer(reducer, {
        todoList: Store.getTodoList(),
    });

    return (
        <TodoDispatch.Provider value={dispatch}>
            <TodoForm />
            <TodoList todoList={state.todoList} />
        </TodoDispatch.Provider>
    );
}
export default Todo;
