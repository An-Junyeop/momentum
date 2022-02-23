import React, { useContext } from 'react';
import useInputs from '../../hooks/useInputs';
import { TodoDispatch } from './Todo';
import Store from '../../Store';

/* To Do 입력 폼 */
function TodoForm() {
    const [value, onChange, reset] = useInputs('');
    const dispatch = useContext(TodoDispatch);

    return (
        <form
            id="todo-form"
            onSubmit={(e) => {
                e.preventDefault();
                const todoItem = {
                    id: Store.getTodoListNextID(),
                    content: value,
                    done: false,
                };
                dispatch({ type: 'CREATE_ITEM', item: todoItem });
                Store.addTodoItem(todoItem);
                reset();
            }}
        >
            <input
                value={value}
                onChange={onChange}
                id="todo-input"
                placeholder="할 일을 입력 후 Enter"
            />
        </form>
    );
}

export default React.memo(TodoForm);
