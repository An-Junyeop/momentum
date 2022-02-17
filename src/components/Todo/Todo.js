import React, {useCallback, useState} from 'react';
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import Store from "../../Store";

/* To do */
function Todo() {
    const [todoList, setTodoList] = useState(Store.getTodoList());

    /* To do 아이템 추가 */
    const addTodoItem = useCallback(content => {
        const todoItem = {
            id: Store.getTodoListNextID(),
            content: content,
            done: false,
        };
        setTodoList(todoList => todoList.concat(todoItem));
        Store.addTodoItem(todoItem);
    }, []);

    /* 체크박스 클릭하여 바뀐 값 수정 */
    const onToggleCheckbox = useCallback(id => {
        setTodoList(todoList =>
            todoList.map(item =>
                item.id === Number.parseInt(id) ? {...item, done: !item.done} : item
            )
        );
        Store.updateTodoList(id);
    }, []);

    /* To do 아이템 삭제 */
    const onClickRemoveButton = useCallback( id => {
        setTodoList(todoList =>
            todoList.filter(item =>
                item.id !== Number.parseInt(id)
            )
        );
        Store.removeTodoItem(id);
    }, []);

    return (
        <>
            <TodoForm
                onSubmit={addTodoItem}
            />
            <TodoList
                todoList={todoList}
                onToggleCheckbox={onToggleCheckbox}
                onClickRemoveButton={onClickRemoveButton}
            />
        </>
    );
}
export default Todo;