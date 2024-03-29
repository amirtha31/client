import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { Box, Divider, Text } from '@mantine/core';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';
import './App.css';
import { useNavigate } from 'react-router-dom';

function AppointmentBooking() {
  const [name, setName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [email, setEmail] = useState('');
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const navigate = useNavigate();

  const handleBooking = () => {
    if (!name || !mobileNumber || !email || !selectedDate || !selectedTime) {
      alert('Please fill all fields and select date and time for the appointment');
      return;
    } else {
      axios
        .post('https://backend-1-q1hc.onrender.com/add-appointment', {
          name,
          mobileNumber,
          email,
          selectedDate,
          selectedTime,
        })
        .then((response) => {
          console.log(response);
        });
      alert('Appointment booked successfully');
      navigate('/');
    }

    console.log('Appointment booked:', {
      name,
      mobileNumber,
      email,
      selectedDate,
      selectedTime,
    });
  };

  return (
    <>
      <Box maxWidth={340} mx="auto">
        <form className="formdata">
          <Text variant="gradient" gradient={{ from: 'teal', to: 'red', deg: 2 }} ta="center" fz="xl" fw={900}>
            Appointment Booking
          </Text>

          <Divider my="md" />
          <br />
          <div className="appointment-form">
            <label className="label">Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              className="input"
            />
            <label className="label">Mobile Number:</label>
            <input
              type="tel"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
              placeholder="Enter your mobile number"
              className="input"
            />
            <label className="label">Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="input"
            />
            <label className="label">Select Date:</label>
            <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              dateFormat="yyyy-MM-dd"
              placeholder="Enter appointment date"
              className="input"
            />
            <label className="label">Select Time:</label>
            <input
              type="time"
              value={selectedTime}
              onChange={(e) => setSelectedTime(e.target.value)}
              className="input"
            />
            <button type="button" onClick={handleBooking} className="button">
              Book Appointment
            </button>
          </div>
        </form>
      </Box>
    </>
  );
}

export default AppointmentBooking;
