//3 conceitos principais do REACT

/**
 * componente : bloco isolado de HTML, CSS e JS, o qual não
 * interfere no restante da aplicação.
 * 
 * propriedades : atributos que uma tag html tem por exemplo:
 * id="". Informações que um componente pai passa para o componente
 * filho
 * 
 * estado :
 */


//isso é um componente.
//SEMPRE QUE CRIAR UM COMPONENTE, a primeira letra DEVE ser maiúscula
//Regra: um componente por arquivo

import Header from  "./Header"
import React, {useState} from 'react' // é praciso importar o useState para mante as informações

function App() {

  //toda função que é própria de um componente, cria-se dentro dele 
  //mesmo
  

  /**
   * Devolve um vertor
   * const counter = useState(0);
   * const [counter, setCounter] = useState(0)
   */

  const [counter, setCounter] = useState(0)

  function incrementeCounter(){
    //essa função ta disponível para todo componente App
     setCounter( counter + 1);

  }

  return (
    //não pode colocar mais de um componente da função.
    //para escrever certo, utiliza-se <div> entorno dos componentes
    /**
     * porém quando usa-se div é possível dificultar a estilização da página
     * então usa-se um fragment <></>
     */
   
    //aprendendo stado

   <>
   <Header title='Dashboard'/>

   
   <h1>Contador : {counter}</h1>
   <button onClick={incrementeCounter}>Incrementar</button>
   </>
  );
}

export default App;
