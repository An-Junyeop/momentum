import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquare } from '@fortawesome/free-regular-svg-icons';
import { faCheckSquare, faTimes } from '@fortawesome/free-solid-svg-icons';

/* To do 항목 */
function TodoItem({ todo, onToggleCheckbox, onClickRemoveButton }) {
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
                    onClick={() => onToggleCheckbox(todo.id)}
                />
            ) : (
                <FontAwesomeIcon
                    className="todo-checkbox"
                    icon={faSquare}
                    onClick={() => onToggleCheckbox(todo.id)}
                />
            )}
            <span className={todo.done ? 'todo-item-done' : ''}>
                {todo.content}
            </span>
            <FontAwesomeIcon
                className="todo-remove"
                icon={faTimes}
                onClick={() => onClickRemoveButton(todo.id)}
            />
        </li>
    );
}

export default React.memo(TodoItem);
