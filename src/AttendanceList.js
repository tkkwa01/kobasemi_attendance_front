import React, { useEffect, useState } from 'react';
import { getAllAttendances } from './api';

const AttendanceList = () => {
    const [attendances, setAttendances] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getAllAttendances();
            console.log('Data fetched:', data);
            setAttendances(data.filter((item) => item.status));
        };
        fetchData();
    }, []);

    return (
        <div>
            <h1>出席者リスト</h1>
            <ul>
                {attendances.map((attendance, index) => (
                    <li key={index}>{attendance.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default AttendanceList;
