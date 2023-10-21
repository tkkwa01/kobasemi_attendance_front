import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link, Routes
} from 'react-router-dom';
import AttendanceList from './AttendanceList';
import RegisterAttendance from './RegisterAttendance';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

function App() {
    return (
        <Router>
            <div>
                <AppBar position="fixed">
                    <Toolbar>
                        <Typography variant="h6" style={{ flexGrow: 1 }}>
                            出席システム
                        </Typography>
                        <Button color="inherit">
                            <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>出席者リスト</Link>
                        </Button>
                        <Button color="inherit">
                            <Link to="/register" style={{ color: 'white', textDecoration: 'none' }}>出席登録</Link>
                        </Button>
                    </Toolbar>
                </AppBar>
                <div style={{ marginTop: 64 }}> {/* AppBarの高さを考慮 */}
                    <Routes>
                        <Route path="/" element={<AttendanceList />} />
                        <Route path="/register" element={<RegisterAttendance />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
