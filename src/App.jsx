import React, { useState } from 'react';
import ServiceList from './Component/ServiceList.jsx';
import './App.css'

function App() {
  const [services, setServices] = useState([
    { name: 'General Checkup', description: 'Basic health checkup', price: 50 },
    { name: 'Blood Test', description: 'Complete blood analysis', price: 30 },
    { name: 'X-Ray', description: 'Chest X-Ray', price: 100 },
  ]);

  const [newService, setNewService] = useState({ name: '', description: '', price: '' });
  const [editingServiceIndex, setEditingServiceIndex] = useState(null);

  // Handle form input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewService((prevService) => ({ ...prevService, [name]: value }));
  };

  // Handle form submission to add or update service
  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (editingServiceIndex !== null) {
      const updatedServices = [...services];
      updatedServices[editingServiceIndex] = {
        ...newService,
        price: parseFloat(newService.price),
      };
      setServices(updatedServices);
      setEditingServiceIndex(null);
    } else {
      setServices((prevServices) => [
        ...prevServices,
        { ...newService, price: parseFloat(newService.price) },
      ]);
    }

    // Clear the form
    setNewService({ name: '', description: '', price: '' });
  };

  // Handle service edit
  const handleEdit = (index) => {
    setEditingServiceIndex(index);
    setNewService(services[index]);
  };

  // Handle service delete
  const handleDelete = (index) => {
    const updatedServices = services.filter((_, i) => i !== index);
    setServices(updatedServices);
  };

  return (
    <div className='container'>
      <h1>Healthcare Service Management</h1>

      {/* Add/Update Service Form */}
      <form onSubmit={handleFormSubmit} className='service-input'>
        <input
          type="text"
          name="name"
          placeholder="Service Name"
          value={newService.name}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="description"
          placeholder="Service Description"
          value={newService.description}
          onChange={handleInputChange}
          required
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={newService.price}
          onChange={handleInputChange}
          required
        />
        <button type="submit">{editingServiceIndex !== null ? 'Update' : 'Add'} Service</button>
      </form>

      {/* Service List */}
      <ServiceList services={services} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
}



export default App;
