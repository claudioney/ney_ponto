import React, {Component} from 'react';

import { Link } from 'react-router-dom'
import MaskedInput from 'react-text-mask'


class Registro extends Component{
 render(){
 	document.title = 'Ney Ponto'
    return(
    <div>
		<nav>
		    <div class="nav-wrapper red accent-4">
		      <div class="brand-logo">Registrar Ponto</div>
        	<ul id="nav-mobile" class="right hide-on-med-and-down">
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/registro">Registro</Link></li>
            <li><Link to="/lista">Lista</Link></li>
            <li><Link to="/sobre">Sobre</Link></li>
            </ul>
		    </div>
		</nav>

<div class="row">
  <form class="col s12">
    <div class="row">
      <div class="input-field col s12">
        <MaskedInput mask={[/[1-9]/,/\d/,':',/[1-9]/,/\d/]} guide={true} />
        <label for="Entrada">Entrada</label>
      </div>
    </div>

    <div class="row">
      <div class="input-field col s12">
        <MaskedInput mask={[/[1-9]/,/\d/,':',/[1-9]/,/\d/]} guide={true} />
        <label for="Entrada">Entrada</label>
      </div>
    </div>

    <div class="row">
      <div class="input-field col s12">
        <MaskedInput mask={[/[1-9]/,/\d/,':',/[1-9]/,/\d/]} guide={true} />
        <label for="Entrada">Entrada</label>
      </div>
    </div>

    <div class="row">
      <div class="input-field col s12">
        <MaskedInput mask={[/[1-9]/,/\d/,':',/[1-9]/,/\d/]} guide={true} />
        <label for="Entrada">Entrada</label>
      </div>
    </div>

    <div class="row">
      <div class="input-field col s6">
        <select>
          <option value="" disabled selected>Choose event type</option>
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
          <option value="3">Option 3</option>
        </select>
        <label>Event type</label>
      </div>
    </div>
  </form>
</div>
	</div>

    )
 }
}

export default Registro;