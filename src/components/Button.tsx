import { useState } from "react";

export function Button(){
  const [ contador, setContador] = useState(0)

  function incrementador(){
    setContador(contador + 1);
    console.log(contador); 

  }
  return(
    <button onClick={incrementador}>{contador}</button>
  )
}
 