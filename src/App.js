import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import './styles/app.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
      arrayCard: [],
      searchCard: [],
      searchQuery: '',
      valueRare: '',
      valueReq12: '',
    };
  }

  onInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    }, () => this.verificaTrueOrFalse());
  };

  isTrueInput = () => {
    const { cardName, cardDescription, cardImage, cardRare } = this.state;
    const arrayInput = [cardName, cardDescription, cardImage, cardRare];
    return arrayInput.every((inputs) => inputs.length >= 1);
  };

  isTrueAttr = () => {
    const { cardAttr1, cardAttr2, cardAttr3 } = this.state;
    const arrayAttr = [cardAttr1, cardAttr2, cardAttr3];
    const noventa = 90;
    const duzDez = 210;
    const soma = arrayAttr.reduce((acc, curr) => +curr + +acc, 0);
    const armazena = arrayAttr.every((attr) => attr <= noventa && attr >= 0);
    return armazena && (soma <= duzDez);
  };

  verificaTrueOrFalse = () => {
    if (this.isTrueAttr() && this.isTrueInput()) {
      this.setState({
        isSaveButtonDisabled: false,
      });
    } else {
      this.setState({
        isSaveButtonDisabled: true,
      });
    }
  };

  onSaveButtonClick = () => {
    const { cardName, cardDescription, cardImage, cardAttr1, cardAttr2, cardAttr3,
      cardRare, cardTrunfo } = this.state;

    const armazenaCard = { cardName,
      cardImage,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardRare,
      cardTrunfo };

    this.setState((prevState) => ({
      arrayCard: [...prevState.arrayCard, armazenaCard],
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
    }));
  };

  verificaTrunfo = () => {
    const { arrayCard } = this.state;
    return arrayCard.some((verify) => verify.cardTrunfo);
  };

  apagaCard = ({ target }) => {
    const { arrayCard } = this.state;
    const apaga = arrayCard.filter((card) => card.cardName !== target.id);
    this.setState({
      arrayCard: apaga,
    });
  };

  filtraName = ({ target }) => {
    const { arrayCard } = this.state;
    const pesquisa = arrayCard.filter((card) => card.cardName.includes(target.value));
    this.setState({
      searchCard: pesquisa,
      searchQuery: target.value,
    });
  };

  filtraRare = ({ target }) => {
    const { arrayCard } = this.state;
    const verify = arrayCard.filter((card) => card.cardRare.includes(target.value));
    this.setState({
      searchCard: verify,
      valueRare: target.value,
    });
  };

  filtraCheckbox = ({ target }) => {
    this.setState({
      valueReq12: target.value,
    });
  };

  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      isSaveButtonDisabled,
      arrayCard,
      searchCard,
      searchQuery,
      valueRare,
      valueReq12,
    } = this.state;

    return (
      <>
        <div className="div-h1">
          <h1>Tryunfo</h1>
        </div>
        <div className="div-form-card">
          <Form
            onInputChange={ this.onInputChange }
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
            isSaveButtonDisabled={ isSaveButtonDisabled }
            onSaveButtonClick={ this.onSaveButtonClick }
            hasTrunfo={ this.verificaTrunfo() }
          />
          <div className="div-visualizacao">
            <h3>PRÉ-VISUALIZAÇÃO</h3>
            <Card
              cardName={ cardName }
              cardDescription={ cardDescription }
              cardAttr1={ cardAttr1 }
              cardAttr2={ cardAttr2 }
              cardAttr3={ cardAttr3 }
              cardImage={ cardImage }
              cardRare={ cardRare }
              cardTrunfo={ cardTrunfo }
            />
          </div>
        </div>
        <h2>TODAS AS CARTAS</h2>
        <div className="div-search">
          <label htmlFor="req10">
            Filtros de Busca
            <input
              id="req10"
              name="searchQuery"
              value={ searchQuery }
              data-testid="name-filter"
              type="text"
              onChange={ this.filtraName }
            />
          </label>
          <label htmlFor="req11">
            Raridade
            <select
              id="req11"
              data-testid="rare-filter"
              value={ valueRare }
              onChange={ this.filtraRare }
            >
              <option value="todas">todas</option>
              <option value="normal">normal</option>
              <option value="raro">raro</option>
              <option value="muito raro">muito raro</option>
            </select>
          </label>
          <label htmlFor="req12">
            <input
              data-testid="trunfo-filter"
              id="req12"
              type="checkbox"
              checked={ valueReq12 }
              onChange={ this.filtraCheckbox }
            />
            Super Trunfo
          </label>
        </div>
        <div className="div-list-card">
          { searchQuery.length > 0
            ? searchCard.map((card) => (
              <div key={ card.cardName } className="list-card">
                <Card { ...card } />
                <button
                  data-testid="delete-button"
                  id={ card.cardName }
                  type="button"
                  onClick={ this.apagaCard }
                >
                  Excluir
                </button>
              </div>))
            : (
              arrayCard.map((card) => (
                <div key={ card.cardName } className="list-card">
                  <Card { ...card } />
                  <button
                    data-testid="delete-button"
                    id={ card.cardName }
                    type="button"
                    onClick={ this.apagaCard }
                  >
                    Excluir
                  </button>
                </div>
              )))}
        </div>
      </>
    );
  }
}

export default App;
