import React from 'react';
import UserForm from './UserForm';
import Greeting from './Greeting';

/* 사용자 */
function User({ storageName, onButtonClick }) {
    return (
        <div id="user">
            {storageName === '' ? (
                <UserForm onButtonClick={onButtonClick} />
            ) : (
                <Greeting
                    storageName={storageName}
                    onButtonClick={onButtonClick}
                />
            )}
        </div>
    );
}

export default User;
