import React, { useEffect, useState } from 'react';
import { getAllAttendances, updateAttendance } from './api';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';

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
                a.name === name ? { ...a, status: newStatus } : a
            ));
        } else {
            alert('エラーが発生しました');
        }
    };

    return (
        <div>
            <Typography variant="h3" component="h1" gutterBottom>
                出席登録
            </Typography>
            <List>
                {attendances.map((attendance, index) => (
                    <ListItem key={index} button onClick={() => toggleAttendance(attendance.name, attendance.status)}>
                        <ListItemText primary={attendance.name} secondary={attendance.status ? '（出席）' : ''} />
                    </ListItem>
                ))}
            </List>
        </div>
    );
};

export default RegisterAttendance;
