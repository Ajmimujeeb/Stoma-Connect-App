import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Appointment = () => {
    const { nurseId } = useParams();
    const [nurse, setNurse] = useState(null);
    const [appointmentDate, setAppointmentDate] = useState('');
    const [appointmentSlot, setAppointmentSlot] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchNurseDetails = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/nurse/${nurseId}`);
                setNurse(response.data);
            } catch (error) {
                console.error('Error fetching nurse details:', error);
            }
        };
        fetchNurseDetails();
    }, [nurseId]);

    const handleAppointmentSubmit = () => {
        // Here, you would typically send the appointment data to your server.
        console.log('Appointment finalized with details:', {
            nurseId,
            appointmentDate,
            appointmentSlot,
        });
        alert('Appointment confirmed!');
        navigate('/');
    };

    if (!nurse) return <p>Loading nurse details...</p>;

    return (
        <div className="appointment-page">
            <h2>Book Appointment with {nurse.name}</h2>
            <p><strong>Specialization:</strong> {nurse.specialization}</p>
            <p><strong>Available Days:</strong> {nurse.availableDays.join(', ')}</p>
            <p><strong>Appointment Slots:</strong> {nurse.appointmentSlots.join(', ')}</p>

            <div className="appointment-form">
                <label>
                    Date:
                    <input
                        type="date"
                        value={appointmentDate}
                        onChange={(e) => setAppointmentDate(e.target.value)}
                    />
                </label>
                <label>
                    Time Slot:
                    <select
                        value={appointmentSlot}
                        onChange={(e) => setAppointmentSlot(e.target.value)}
                    >
                        <option value="">Select Time Slot</option>
                        {nurse.appointmentSlots.map((slot, index) => (
                            <option key={index} value={slot}>{slot}</option>
                        ))}
                    </select>
                </label>
                <button onClick={handleAppointmentSubmit}>Confirm Appointment</button>
            </div>
        </div>
    );
};

export default Appointment;
