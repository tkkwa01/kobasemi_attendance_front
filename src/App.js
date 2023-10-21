import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link, Routes
} from 'react-router-dom';
import AttendanceList from './AttendanceList';
import RegisterAttendance from './RegisterAttendance';

function App() {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">出席者リスト</Link>
                        </li>
                        <li>
                            <Link to="/register">出席登録</Link>
                        </li>
                    </ul>
                </nav>
                <Routes>
                <Route path="/" element={<AttendanceList />} />
                <Route path="/register" element={<RegisterAttendance />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
