import React from 'react';
import useInputs from '../../hooks/useInputs';

/* 사용자 이름 입력 폼 */
function UserForm({ onButtonClick }) {
    const [value, onChange, reset] = useInputs('');
    /* 폼 서밋 핸들러
     * 입력된 이름을 저장한다 */
    const handleSubmitUserForm = () => {
        if (value.trim().length) {
            onButtonClick(value);
        } else {
            alert('이름을 다시 입력해주세요.');
            reset();
        }
    };

    return (
        <form onSubmit={handleSubmitUserForm}>
            <div>Hello, What's your name?</div>
            <input
                id="user-name-input"
                type="text"
                value={value}
                onChange={onChange}
            />
            {value !== '' && (
                <button onClick={handleSubmitUserForm}>Continue</button>
            )}
        </form>
    );
}

export default UserForm;
