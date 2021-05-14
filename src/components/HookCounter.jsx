import React, { useState, useEffect } from 'react';

export function HookCounter() {
  // Reglas
  // 1er  agregarlos siempre al inicio
  // 2da no agragarlos dentro de condiciones
  const [count, setCount] = useState(0);
  // lifecycle hooks
  // componentDidMount
  // despues del render y solo una vez en la fase de montaje
  useEffect(() => {
    console.log('emulando a componentDidMount');
    setInterval(() => {
      setCount(count => {
        return count + 10;
      });
    }, 2000);
  }, []);
  // componentDidUpdate
  // se ejecuta cuando se actualiza el estado
  // despues del render
  useEffect(() => {
    console.log('emulando a componentDidUpdate');
  }, [count]);
  // componentWillUnmount
  // se ejecuta una sola vez en la fase de desmontaje
  useEffect(() => {
      return () => {
        console.log('emulando a componentWillUnmount');
      };
  });
  // render
  console.log('render');
  return (
    <div>
      <div>
        <h3>{'Counter Hook'}</h3>
          {count}
      </div>
      <button
        onClick={() => {
          // equivalente a setState
          setCount(count => {
            return count + 1;
          });
        }}
      >increase by 1</button>
    </div>
  );
}

