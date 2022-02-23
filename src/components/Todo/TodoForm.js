import React, { useCallback } from 'react';
import useInputs from '../../hooks/useInputs';

/* To Do 입력 폼 */
function TodoForm({ onSubmit }) {
    const [value, onChange, reset] = useInputs('');

    /* 폼 서밋 핸들러
     * 입력 된 값을 저장한다 */
    const handleSubmitTodoForm = useCallback(
        (e) => {
            e.preventDefault();
            onSubmit(value);
            reset();
        },
        [onSubmit, reset, value],
    );

    return (
        <form id="todo-form" onSubmit={handleSubmitTodoForm}>
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
