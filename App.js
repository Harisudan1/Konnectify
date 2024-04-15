import React, { useState } from 'react';
import './App.css';  
import axios from 'axios';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/submit-form', formData);
      console.log(response.data);
      // Handle success
    } catch (error) {
      console.error('There was an error!', error);
      // Handle error
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My React Form App</h1>
      </header>
      <main>
        <div className="form-container">
          <h2>Simple Form</h2>
          <form onSubmit={handleSubmit} className="form">
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea id="message" name="message" rows="4" value={formData.message} onChange={handleChange} className="form-control" />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </main>
    </div>
  );
}

export default App;
