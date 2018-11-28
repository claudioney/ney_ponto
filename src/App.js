import React, {Component} from 'react';

import 'materialize-css/dist/css/materialize.min.css';
import { Link } from 'react-router-dom'


class App extends Component{
 render(){
 	document.title = 'Ney Ponto'
    return(
    <div>
		<nav>
		    <div class="nav-wrapper red accent-4">
		      <div class="brand-logo">Ponto</div>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/registro">Registro</Link></li>
            <li><Link to="/lista">Lista</Link></li>
            <li><Link to="/sobre">Sobre</Link></li>
            </ul>
		    </div>
		</nav>
		<div class="collection">
	        <Link to="/registro" class="collection-item">Registrar horario</Link>
          <Link to="/lista" class="collection-item">Lista de horarios</Link>
	        <Link to="/sobre" class="collection-item">Ir para a página sobre</Link>
      	</div>
	</div>
    )
 }
}

export default App;