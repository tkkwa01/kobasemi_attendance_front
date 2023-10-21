import React, { useState } from 'react';
import { updateAttendance } from './api';

const RegisterAttendance = () => {
    const [name, setName] = useState('');

    const handleSubmit = async () => {
        const response = await updateAttendance(name, true);
        if (response && response.message === 'Status updated') {
            alert('出席登録が完了しました');
        } else {
            alert('エラーが発生しました');
        }
    };

    return (
        <div>
            <h1>出席登録</h1>
            <input
                type="text"
                placeholder="名前"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <button onClick={handleSubmit}>登録</button>
        </div>
    );
};

export default RegisterAttendance;
