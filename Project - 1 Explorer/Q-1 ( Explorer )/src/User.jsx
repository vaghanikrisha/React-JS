import React, { Component } from 'react';

class User extends Component {
  render() {
    const data = [
      {
        grid: 1,
        name: 'KISHAN',
        email: 'kishan@gmail.com',
        password: 'kishan@123',
        course: ['html', 'css', 'bootstrap', 'js'],
        city: 'surat'
      },
      {
        grid: 2,
        name: 'JAY',
        email: 'jay@gmail.com',
        password: 'kishan@123',
        course: ['photoshop', 'figma', 'illustrator', 'adobe xd'],
        city: 'rajkot'
      },
      {
        grid: 3,
        name: 'AJAY',
        email: 'ajay@gmail.com',
        password: 'ajay@123',
        course: ['html', 'css', 'bootstrap', 'nodejs'],
        city: 'amareli'
      },
      {
        grid: 4,
        name: 'NISHA',
        email: 'nisha@gmail.com',
        password: 'nisha@123',
        course: ['html', 'css', 'bootstrap', 'python'],
        city: 'vadodara'
      }
    ];

    return (
      <div className="user-list">
        {data.map((item) => (
          <div key={item.grid} className={`user-item special-card-${item.grid}`}>
            <h2>Student Entry</h2>
            <h3>{item.name}</h3>
            <p>Email: {item.email}</p>
            <p>City: {item.city}</p>
            <p>Courses:</p>
            <ul>
              {item.course.map((course, index) => (
                <li key={index} className="course-item">{course}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  }
}

export default User;
