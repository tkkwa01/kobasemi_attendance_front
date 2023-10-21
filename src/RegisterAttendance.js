import React, { useEffect, useState } from 'react';
import { getAllAttendances, updateAttendance } from './api';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Typography from '@mui/material/Typography';  // この行を追加

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
            <Typography variant="h3" component="h1" gutterBottom>  {/* この行を修正 */}
                出席登録
            </Typography>
            <List>
                {attendances.map((attendance, index) => (
                    <ListItem key={index} button onClick={() => toggleAttendance(attendance.name, attendance.status)}>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            {attendance.status && (
                                <IconButton>
                                    <CheckCircleIcon style={{ color: 'green' }} />
                                </IconButton>
                            )}
                            <ListItemText primary={attendance.name} />
                        </div>
                    </ListItem>
                ))}
            </List>
        </div>
    );
};

export default RegisterAttendance;
