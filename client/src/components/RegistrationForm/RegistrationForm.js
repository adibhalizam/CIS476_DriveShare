// RegistrationForm.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Mediator from '../../utils/mediator/mediator';
import { registerUser } from '../../middlewares/auth';
import './style.css';

// RegistrationForm component
const RegistrationForm = () => {
  // State for form data initialization
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    securityQuestion1: { question: 'What is the name of your first pet?', answer: '' },
    securityQuestion2: { question: 'In what city were you born?', answer: '' },
    securityQuestion3: { question: 'What is the name of your favorite teacher?', answer: '' }
  });

  // Handle changes in form inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    // Update state according to the input field name
    if (name.startsWith('securityQuestion')) {
      const questionNumber = name.charAt(name.length - 1); // Extract the question number from the field name
      const updatedQuestion = { ...formData[name], answer: value };
      setFormData({ ...formData, [name]: updatedQuestion });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };
  
  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Call registerUser function
      await registerUser(formData);
      Mediator.publish('registrationSuccess'); // Publish registration success event
    } catch (error) {
      alert('Registration failed');
      console.error(error.message);
    }
  };

  // JSX structure to render the registration form
  return (
    <div className="form-container">
      <h2>Register New Account</h2>
      <form className="registration-form" onSubmit={handleSubmit}>
        <p>Name:</p>
        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" required />
        <p>Email:</p>
        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
        <p>Password:</p>
        <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" required />
        <div className="security-questions">
          <p>{formData.securityQuestion1.question}</p>
          <input type="text" name="securityQuestion1" value={formData.securityQuestion1.answer} onChange={handleChange} placeholder="Answer" required />
          <p>{formData.securityQuestion2.question}</p>
          <input type="text" name="securityQuestion2" value={formData.securityQuestion2.answer} onChange={handleChange} placeholder="Answer" required />
          <p>{formData.securityQuestion3.question}</p>
        <input type="text" name="securityQuestion3" value={formData.securityQuestion3.answer} onChange={handleChange} placeholder="Answer" required />
        </div>
        <button type="submit">Register</button>
        <Link className='link' to="/auth">Already have an account? Login</Link>
      </form>
    </div>
  );
};

export default RegistrationForm;
