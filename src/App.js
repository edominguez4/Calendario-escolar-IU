import React, { useState } from 'react';
import Filters from './components/Filters';
import Calendar from './components/Calendar';
import AddClassForm from './components/AddClassForm';
import Help from './components/Help'; 
import './App.css';

const App = () => {
  const [classes, setClasses] = useState([]);
  const [filteredClasses, setFilteredClasses] = useState([]);

  const addClass = (newClass) => {
    const updatedClasses = [...classes, newClass];
    setClasses(updatedClasses);
    setFilteredClasses(updatedClasses); 
    alert('Clase agregada');
  };

  const removeClass = (classToRemove) => {
    const updatedClasses = classes.filter(cls => cls !== classToRemove);
    setClasses(updatedClasses);
    setFilteredClasses(updatedClasses); 
    alert('Clase eliminada');
  };

  const applyFilters = (filters) => {
    let filtered = classes.filter(cls => {
      return (
        (!filters.keyword || cls.name.toLowerCase().includes(filters.keyword.toLowerCase())) &&
        (!filters.degree || cls.degree === filters.degree) &&
        (!filters.course || cls.course === filters.course) &&
        (!filters.group || cls.group === filters.group) &&
        (!filters.type || cls.type === filters.type)
      );
    });
    setFilteredClasses(filtered);
    alert('Filtro aplicado');
  };

  const clearFilters = () => {
    setFilteredClasses(classes);
  };

  return (
    <div className="App">
      <header>
        <h1>Calendario Escolar</h1>
      </header>
      <Filters applyFilters={applyFilters} clearFilters={clearFilters} />
      <Calendar classes={filteredClasses.length ? filteredClasses : classes} removeClass={removeClass} />
      <AddClassForm addClass={addClass} />
      <Help /> 
    </div>
  );
};

export default App;
