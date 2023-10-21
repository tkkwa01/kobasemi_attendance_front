import axios from "axios";

const BASE_URL = 'http://localhost:8085';

export const getAllAttendances = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/attendance/watch`);
        console.log('API Response:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error fetching attendance data:', error);
        return [];
    }
};

export const updateAttendance = async (name, status) => {
    try {
        const response = await axios.post(`${BASE_URL}/attendance/register`, { name, status });
        return response.data;
    } catch (error) {
        console.error('Error updating attendance:', error);
        return null;
    }
};
