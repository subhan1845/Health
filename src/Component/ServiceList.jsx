import React from 'react'
import './ServiceList.css'

const ServiceList = ({ services, onEdit, onDelete }) => {
    return (
        <div className='container'>
            <h2>Healthcare Services</h2>
            <ul>
                {services.map((service, index) => (
                    <li key={index} className='serviceCard'>
                        <h3>{service.name}</h3>
                        <p>{service.description}</p>
                        <p><strong>Price:</strong> ${service.price}</p>
                        <button onClick={() => onEdit(index)} className='edit'>Edit</button>
                        <button onClick={() => onDelete(index)}className='delete'>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ServiceList
