import React from 'react';
import TodoItem from "./TodoItem";

function TodoList() {
    return (
        <ul>
            {[1, 2, 3, 4, 5].map((value, i) =>
                <TodoItem
                    value={value}
                    key={i}
                />
            )}
        </ul>
    )

}

export default TodoList;