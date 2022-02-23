import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquare } from '@fortawesome/free-regular-svg-icons';
import { faCheckSquare, faTimes } from '@fortawesome/free-solid-svg-icons';
import { TodoDispatch } from './Todo';
import Store from '../../Store';

/* To do 항목 */
function TodoItem({ todo }) {
    const dispatch = useContext(TodoDispatch);

    return (
        <li className="todo-item">
            <input
                type="checkbox"
                value={todo.id}
                checked={todo.done}
                readOnly
            />
            {todo.done ? (
                <FontAwesomeIcon
                    className="todo-checkbox"
                    icon={faCheckSquare}
                    onClick={() => {
                        dispatch({
                            type: 'TOGGLE_ITEM',
                            id: todo.id,
                        });
                        Store.updateTodoList(todo.id);
                    }}
                />
            ) : (
                <FontAwesomeIcon
                    className="todo-checkbox"
                    icon={faSquare}
                    onClick={() => {
                        dispatch({
                            type: 'TOGGLE_ITEM',
                            id: todo.id,
                        });
                        Store.updateTodoList(todo.id);
                    }}
                />
            )}
            <span className={todo.done ? 'todo-item-done' : ''}>
                {todo.content}
            </span>
            <FontAwesomeIcon
                className="todo-remove"
                icon={faTimes}
                onClick={() => {
                    dispatch({
                        type: 'REMOVE_ITEM',
                        id: todo.id,
                    });
                    Store.removeTodoItem(todo.id);
                }}
            />
        </li>
    );
}

export default React.memo(TodoItem);
