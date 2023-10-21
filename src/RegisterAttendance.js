import React, { useEffect, useState } from 'react';
import { getAllAttendances, updateAttendance } from './api';

const RegisterAttendance = () => {
    const [attendances, setAttendances] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getAllAttendances();
            setAttendances(data);
        };
        fetchData();
    }, []);

    const toggleAttendance = async (name, currentStatus) => {
        const newStatus = !currentStatus;
        const response = await updateAttendance(name, newStatus);
        if (response && response.message === 'Status updated') {
            setAttendances(attendances.map(a =>
                a.name === name ? {...a, status: newStatus} : a
            ));
        } else {
            alert('エラーが発生しました');
        }
    };

    return (
        <div>
            <h1>出席登録</h1>
            <ul>
                {attendances.map((attendance, index) => (
                    <li key={index} onClick={() => toggleAttendance(attendance.name, attendance.status)}>
                        {attendance.name} {attendance.status ? '（出席）' : ''}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RegisterAttendance;
