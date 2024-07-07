import React from 'react';

const Calendar = ({ classes, removeClass }) => {
  const days = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'];

  return (
    <table>
      <thead>
        <tr>
          {days.map(day => (
            <th key={day}>{day}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          {days.map(day => (
            <td key={day} style={{ verticalAlign: 'top' }}>
              {classes
                .filter(classItem => classItem.day.toLowerCase() === day.toLowerCase())
                .map((classItem, index) => (
                  <div key={index} className="class-container">
                    <strong>{classItem.name}</strong><br />
                    {classItem.degree}<br />
                    {classItem.course}<br />
                    {classItem.group}<br />
                    {classItem.type}<br />
                    <button onClick={() => removeClass(classItem)}>Eliminar</button>
                  </div>
                ))}
            </td>
          ))}
        </tr>
      </tbody>
    </table>
  );
};

export default Calendar;
