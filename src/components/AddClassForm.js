import React, { useState } from 'react';

const AddClassForm = ({ addClass }) => {
  const [name, setName] = useState('');
  const [degree, setDegree] = useState('');
  const [course, setCourse] = useState('');
  const [group, setGroup] = useState('');
  const [type, setType] = useState('');
  const [day, setDay] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && degree && course && group && type && day) {
      addClass({ name, degree, course, group, type, day });
      setName('');
      setDegree('');
      setCourse('');
      setGroup('');
      setType('');
      setDay('');
    } else {
      alert('Por favor, complete todos los campos.');
    }
  };

  const getSelectClass = (value) => {
    return value ? 'selected' : 'unselected';
  };

  return (
    <section id="add-class">
      <h2>Añadir una clase</h2>
      <form id="add-class-form" onSubmit={handleSubmit}>
        <label>
          Nombre de la clase
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Nombre de la clase"
            className={getSelectClass(name)}
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
        <label>
          Día
          <select
            value={day}
            onChange={(e) => setDay(e.target.value)}
            className={getSelectClass(day)}
          >
            <option value="">Día</option>
            <option value="lunes">Lunes</option>
            <option value="martes">Martes</option>
            <option value="miercoles">Miércoles</option>
            <option value="jueves">Jueves</option>
            <option value="viernes">Viernes</option>
          </select>
        </label>
        <button type="submit">Añadir Clase</button>
      </form>
      <div className="note">
        Nota: En caso no se muestre la clase agregada, presionar los botones de agregar o eliminar filtros.
      </div>
    </section>
  );
};

export default AddClassForm;
