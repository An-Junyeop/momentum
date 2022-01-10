import React, {useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUndoAlt } from "@fortawesome/free-solid-svg-icons";

function User({storageName, onButtonClick}) {
    const [name, setName] = useState("");

    // 버튼 클릭 핸들러
    const handleClickButton = () => {
        if(name.trim().length) {
            onButtonClick(name);
        } else {
            alert("이름을 다시 입력해주세요.");
            setName("");
        }
    }

    const handleClickResetButton = () => {
        onButtonClick("");
    }

    return (
        <div id="user">
            {storageName === '' ?
                <form onSubmit={handleClickButton}>
                    <div>Hello, What's your name?</div>
                    <input id="user-name-input"
                           type="text"
                           value={name}
                           onChange={(e) => setName(e.target.value)}
                    />
                    {name !== '' &&
                        <button onClick={handleClickButton}>
                            Continue
                        </button>
                    }
                </form> :
                <div id="greeting">
                    Hello, {storageName}.

                    <span className="menu">
                        <FontAwesomeIcon
                            icon={faUndoAlt}
                            onClick={handleClickResetButton}
                        />
                    </span>
                </div>
            }
        </div>
    )
}


export default User;