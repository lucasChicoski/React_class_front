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

//import Header from  "./Header";
import React from 'react'; // é praciso importar o useState para mante as informações
import './Global.css'; //importando o css
import './App.css';
import './Sidebar.css'

function App() {

  //toda função que é própria de um componente, cria-se dentro dele 
  //mesmo


  /**
   * Devolve um vertor
   * const counter = useState(0);
   * const [counter, setCounter] = useState(0)
   */



  return (

    //não pode colocar mais de um componente da função.
    //para escrever certo, utiliza-se <div> entorno dos componentes
    /**
     * porém quando usa-se div é possível dificultar a estilização da página
     * então usa-se um fragment <></>
     */

    //aprendendo stado

    <div id="App">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div class="input-block">
            <label htmlFor="github_username">Usuário do Git Hub</label>
            <input name="github_username" id="github_username" required></input>
          </div>

          <div class="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input name="techs" id="techs" required></input>
          </div>

          <div className="input-group">

            <div class="input-block">

              <label htmlFor="latitude">Latitude</label>
              <input name="latitude" id="latitude" required></input>

            </div>

            <div class="input-block">

              <label htmlFor="longitude">Longitude</label>
              <input name="longitude" id="longitude" required></input>

            </div>

          </div>

          <button type="submit">Salvar</button>

        </form>
      </aside>
      <main>

      </main>

    </div>

  );
}

export default App;
