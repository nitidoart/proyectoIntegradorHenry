import React, { useState } from 'react';

function Contador() {
  // Declaramos una variable de estado llamada "contador" con un valor inicial de 0
  const [contador, setContador] = useState(0);

  // Función que incrementa el contador en 1 cuando se hace clic en el botón
  const incrementarContador = () => {
    setContador(contador + 1);
  };

  return (
    <div>
      <h1>Contador: {contador}</h1>
      <button onClick={incrementarContador}>Incrementar</button>
    </div>
  );
}

export default Contador;
