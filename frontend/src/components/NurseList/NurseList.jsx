import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import'./NurseList.css'

const NurseList = () => {
    const [nurses, setNurses] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        // Fetch nurse data from the backend
        axios.get('http://localhost:5000/nurse') // Adjust URL as necessary
            .then(response => {
                setNurses(response.data); // Use setNurses here, not setClients
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching nurses:', error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    const handleAppointmentClick = (nurseId) => {
        navigate(`/appointment/${nurseId}`);
    };

    return (
        <div className="nurse-list">
            {/* <h1>Nurses</h1> */}
            <div className="nurse-cards">
                {nurses.map((nurse) => (
                    <div key={nurse._id} className="nurse-card">
                        <img src={nurse.profileImage} alt={nurse.name} />
                        <h3>{nurse.name}</h3>
                        <p><strong>Specialization:</strong> {nurse.specialization}</p>
                        <p><strong>Experience:</strong> {nurse.experience} years</p>
                        <p><strong>Rating:</strong> {nurse.rating} / 5</p>
                        <button onClick={() => handleAppointmentClick(nurse._id)}>Take Appointment</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NurseList;
