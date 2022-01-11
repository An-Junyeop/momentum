import React, {useState} from "react";

/* 사용자 이름 입력 폼 */
function UserForm({onButtonClick}) {
    const [name, setName] = useState("");

    /* 폼 서밋 핸들러
    * 입력된 이름을 저장한다 */
    const handleFormSubmit = () => {
        if(name.trim().length) {
            onButtonClick(name);
        } else {
            alert("이름을 다시 입력해주세요.");
            setName("");
        }
    }

    return (
        <form onSubmit={handleFormSubmit}>
            <div>Hello, What's your name?</div>
            <input id="user-name-input"
                   type="text"
                   value={name}
                   onChange={(e) => setName(e.target.value)}
            />
            {name !== '' &&
                <button onClick={handleFormSubmit}>
                    Continue
                </button>
            }
        </form>
    )
}

export default UserForm;