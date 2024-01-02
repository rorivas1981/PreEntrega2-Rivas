import React from 'react';
import './ItemListContainer.css'; // Asegúrate de ajustar la ruta y el nombre del archivo de estilos

const ItemListContainer = ({ greeting }) => {
  return (
    <div className="item-list-container">
      <h2>{greeting}</h2>
    </div>
  );
}

export default ItemListContainer;
