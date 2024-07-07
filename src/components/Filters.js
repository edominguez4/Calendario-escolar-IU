import React, { useState } from 'react';

const Filter = ({ applyFilters, clearFilters }) => {
  const [keyword, setKeyword] = useState('');
  const [degree, setDegree] = useState('');
  const [course, setCourse] = useState('');
  const [group, setGroup] = useState('');
  const [type, setType] = useState('');

  const handleApplyFilters = () => {
    applyFilters({ keyword, degree, course, group, type });
  };

  const handleClearFilters = () => {
    setKeyword('');
    setDegree('');
    setCourse('');
    setGroup('');
    setType('');
    clearFilters();
  };

  const getSelectClass = (value) => {
    return value ? 'selected' : 'unselected';
  };

  return (
    <section id="filters">
      <h2>Filtros</h2>
      <div>
        <label>
          Palabra clave
          <input
            type="text"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            placeholder="Palabra clave"
            className={getSelectClass(keyword)}
          />
        </label>
        <label>
          Grado
          <select
            value={degree}
            onChange={(e) => setDegree(e.target.value)}
            className={getSelectClass(degree)}
          >
            <option value="">Grado</option>
            <option value="Ing. Comp.">Ingeniería de Computadoras</option>
            <option value="Ing. Soft.">Ingeniería de Software</option>
            <option value="Ing. Info.">Ingeniería Informática</option>
            <option value="Ing. Salud">Ingeniería de la Salud</option>
          </select>
        </label>
        <label>
          Curso
          <select
            value={course}
            onChange={(e) => setCourse(e.target.value)}
            className={getSelectClass(course)}
          >
            <option value="">Curso</option>
            <option value="1">1</option>
            <option value="2">2</option>
          </select>
        </label>
        <label>
          Grupo
          <select
            value={group}
            onChange={(e) => setGroup(e.target.value)}
            className={getSelectClass(group)}
          >
            <option value="">Grupo</option>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
          </select>
        </label>
        <label>
          Tipo
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className={getSelectClass(type)}
          >
            <option value="">Tipo</option>
            <option value="Teórica">Teórica</option>
            <option value="Práctica">Práctica</option>
            <option value="Prueba">Prueba</option>
          </select>
        </label>
        <button onClick={handleApplyFilters}>Aplicar Filtros</button>
        <button onClick={handleClearFilters}>Eliminar Filtros</button>
      </div>
    </section>
  );
};

export default Filter;
