// ListCarPage.js
import React, { useState } from 'react';
import { listCarForRent } from '../middlewares/car';

const ListCarPage = () => {
  // Initialize state for form data
  const [formData, setFormData] = useState({
    make: '',
    model: '',
    year: '',
    mileage: '',
    rentalPricing: '',
    pickUpLocation: '',
    startDate: '',
    endDate: '',
    owner: localStorage.getItem("userId")
  });

  // Handle form input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send form data to list car for rent
      await listCarForRent(formData);
      // Display success message
      alert('Car listed successfully!');
    } catch (error) {
      console.error(error.message);
      // Display error message
      alert('Failed to list the car.');
    }
  };

  // Render the component
  return (
    <div>
      <form onSubmit={handleSubmit} className='form-container'>
        <h2>List Your Car for Rent</h2>
        <input type="text" name="make" value={formData.make} onChange={handleChange} placeholder="Make" required />
        <input type="text" name="model" value={formData.model} onChange={handleChange} placeholder="Model" required />
        <input type="text" name="year" value={formData.year} onChange={handleChange} placeholder="Year" required />
        <input type="text" name="mileage" value={formData.mileage} onChange={handleChange} placeholder="Mileage" required />
        <input type="text" name="rentalPricing" value={formData.rentalPricing} onChange={handleChange} placeholder="Rental Pricing" required />
        <input type="text" name="pickUpLocation" value={formData.pickUpLocation} onChange={handleChange} placeholder="Pick Up Location" required />
        <input type="date" name="startDate" value={formData.startDate} onChange={handleChange} placeholder="Start Date" required />
        <input type="date" name="endDate" value={formData.endDate} onChange={handleChange} placeholder="End Date" required />
        <button type="submit">List Car</button>
      </form>
    </div>
  );
};

export default ListCarPage;
