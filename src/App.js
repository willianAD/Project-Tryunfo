import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

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
      cardRare, cardTrunfo, arrayCard } = this.state;

    const armazenaCard = { cardName,
      cardImage,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardRare,
      cardTrunfo };
    console.log(armazenaCard);
    console.log(arrayCard);
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
    return arrayCard.some((param) => param.cardTrunfo);
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
    } = this.state;

    return (
      <>
        <h1>Tryunfo</h1>
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
      </>
    );
  }
}

export default App;
