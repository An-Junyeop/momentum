import React, {useCallback, useState} from 'react';

/* To Do 입력 폼 */
function TodoForm({onSubmit}) {
    const [value, setValue] = useState("");

    /* 폼 서밋 핸들러
    * 입력 된 값을 저장한다 */
    const handleSubmitTodoForm = useCallback( (e) => {
        e.preventDefault();
        onSubmit(value);
        setValue("");
    }, [onSubmit, value]);

    const onChangeInput = useCallback(e => {
        setValue(() => e.target.value);
    }, []);


    return (
        <form
            id="todo-form"
            onSubmit={handleSubmitTodoForm}>
            <input
                id="todo-input"
                value={value}
                onChange={onChangeInput}
            />
        </form>
    );
}

export default React.memo(TodoForm);