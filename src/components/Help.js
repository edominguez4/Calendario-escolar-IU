import React from 'react';

const Help = () => {
  return (
    <section id="help">
      <h2>Ayuda y Documentación</h2>
      <div className="help-content">
        <h3>¿Cómo añadir una clase?</h3>
        <p>Para añadir una clase, rellene todos los campos del formulario en la sección "Añadir una clase" y haga clic en el botón "Añadir Clase".</p>
        
        <h3>¿Cómo aplicar filtros?</h3>
        <p>Para aplicar filtros, rellene los campos de filtro en la sección "Filtros" y haga clic en el botón "Aplicar Filtros". Para eliminar los filtros, haga clic en el botón "Eliminar Filtros".</p>
        
        <h3>¿Cómo eliminar una clase?</h3>
        <p>Para eliminar una clase, haga clic en el botón "Eliminar" de la clase que desea eliminar en el calendario.</p>
      </div>
    </section>
  );
};

export default Help;
