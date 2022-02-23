import React, { useCallback, useReducer } from 'react';
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

/* To do */
function Todo() {
    const [state, dispatch] = useReducer(reducer, {
        todoList: Store.getTodoList(),
    });

    /* To do 아이템 추가 */
    const addTodoItem = useCallback((content) => {
        const todoItem = {
            id: Store.getTodoListNextID(),
            content: content,
            done: false,
        };
        dispatch({
            type: 'CREATE_ITEM',
            item: todoItem,
        });
        Store.addTodoItem(todoItem);
    }, []);

    /* 체크박스 클릭하여 바뀐 값 수정 */
    const onToggleCheckbox = useCallback((id) => {
        dispatch({
            type: 'TOGGLE_ITEM',
            id: id,
        });
        Store.updateTodoList(id);
    }, []);

    /* To do 아이템 삭제 */
    const onClickRemoveButton = useCallback((id) => {
        dispatch({
            type: 'REMOVE_ITEM',
            id: id,
        });
        Store.removeTodoItem(id);
    }, []);

    return (
        <>
            <TodoForm onSubmit={addTodoItem} />
            <TodoList
                todoList={state.todoList}
                onToggleCheckbox={onToggleCheckbox}
                onClickRemoveButton={onClickRemoveButton}
            />
        </>
    );
}
export default Todo;
