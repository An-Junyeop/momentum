import React from 'react';
import TodoItem from './TodoItem';

/* To do 목록 */
function TodoList({ todoList }) {
    return (
        <ul id="todo-list">
            {todoList.map((item) => (
                <TodoItem todo={item} key={item.id} />
            ))}
        </ul>
    );
}

export default React.memo(TodoList);
