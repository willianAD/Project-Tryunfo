import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="name">
          Nome
          <input
            data-testid="name-input"
            id="name"
            name="name"
            type="text"
          />
        </label>
        <br />
        <label htmlFor="description">
          Descrição
          <textarea
            data-testid="description-input"
            id="description"
            name="description"
            type="textarea"
          />
        </label>
        <br />
        <label htmlFor="attribute1">
          Attr01
          <input
            data-testid="attr1-input"
            id="attribute1"
            name="attribute1"
            type="number"
          />
        </label>
        <br />
        <label htmlFor="attribute2">
          Attr02
          <input
            data-testid="attr2-input"
            id="attribute2"
            name="attribute2"
            type="number"
          />
        </label>
        <br />
        <label htmlFor="attribute3">
          Attr03
          <input
            data-testid="attr3-input"
            id="attribute3"
            name="attribute3"
            type="number"
          />
        </label>
        <br />
        <label htmlFor="image">
          Imagem
          <input
            data-testid="image-input"
            id="image"
            name="image"
            type="text"
          />
        </label>
        <br />
        <label htmlFor="raridade">
          <select
            id="raridade"
            data-testid="rare-input"
            name="raridade"
          >
            <option key="normal">normal</option>
            <option key="raro">raro</option>
            <option key="muitoRaro">muito raro</option>
          </select>
        </label>
        <br />
        <label htmlFor="checkbox">
          <input
            data-testid="trunfo-input"
            id="checkbox"
            name="checkbox"
            type="checkbox"
          />
          Super Trybe Trunfo
        </label>
        <button data-testid="save-button" type="button">Salvar</button>
      </form>
    );
  }
}

export default Form;
