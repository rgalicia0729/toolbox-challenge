import React, { useState } from 'react';
import { connect } from 'react-redux';

import { sendText } from '../redux/palindrome/actions';

const FormOfText = ({ sendText }) => {
  const [text, setText] = useState('');

  // Toma el texto del input del formulario
  const handleText = (e) => {
    setText(e.target.value);
  }

  // Ejecuta la acción para enviar el texto al servidor
  const enviarText = () => {
    sendText(text);
    setText('');
  }

  return (
    <nav className="navbar navbar-light bg-light">
      <form className="container-fluid">
        <div className="input-group">
          <span className="input-group-text" id="basic-addon1">Ingresa un texto</span>
          <input
            type="text"
            className="form-control"
            placeholder="Ingresa un texto nuevo"
            aria-describedby="basic-addon1"
            value={text}
            onChange={handleText}
          />

          <button
            className="btn btn-outline-success"
            type="button"
            onClick={enviarText}
          >Send</button>
        </div>
      </form>
    </nav>
  );
};

const mapDispatchToProps = {
  sendText
}

export default connect(null, mapDispatchToProps)(FormOfText);
