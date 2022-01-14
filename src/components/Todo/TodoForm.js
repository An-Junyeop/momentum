import React, {useState} from 'react';

/* To Do 입력 폼 */
function TodoForm({onSubmit}) {
    const [value, setValue] = useState("");

    /* 폼 서밋 핸들러
    * 입력 된 값을 저장한다 */
    const handleSubmitTodoForm = (e) => {
        e.preventDefault();
        onSubmit(value);
        setValue("");
    }

    return (
        <form
            id="todo-form"
            onSubmit={handleSubmitTodoForm}>
            <input
                id="todo-input"
                value={value}
                onChange={(e) => {setValue(e.target.value);}}
            />
        </form>
    );
}

export default TodoForm;