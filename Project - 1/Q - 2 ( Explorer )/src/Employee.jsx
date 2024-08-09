import React from 'react';
import './Employee.css';

const Employees = ({ employees }) => {
    return (
        <div className="employee-list">
            {employees.map((employee) => (
                <div key={employee.id} className="employee-card">
                    <div className="employee-image-container">
                        <img src={employee.image} alt={employee.name} className="employee-image" />
                    </div>
                    <div className="employee-info">
                        <h2 className="employee-name">{employee.name}</h2>
                        <p className="employee-email">Email: {employee.email}</p>
                        <p className="employee-phone">Phone: {employee.phone}</p>
                        <p className="employee-address">Address: {employee.address}</p>
                        <p className="employee-position">Position: {employee.position}</p>
                        <p className="employee-salary">Salary: ${employee.salary.toLocaleString()}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Employees;
