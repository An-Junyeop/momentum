import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUndoAlt } from '@fortawesome/free-solid-svg-icons';

/* 사용자 이름 표시 */
function Greeting({ storageName, onButtonClick }) {
    /* 리셋 버튼 클릭 핸들러
     * 이름을 초기화 한다 */
    const handleClickResetButton = () => {
        onButtonClick('');
    };

    return (
        <div id="greeting">
            Hello, {storageName}.
            <span className="menu">
                <FontAwesomeIcon
                    icon={faUndoAlt}
                    onClick={handleClickResetButton}
                />
            </span>
        </div>
    );
}

export default Greeting;
