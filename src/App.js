import React from 'react';
import Form from './components/Form';

class App extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     cardName: '',
  //     cardDescription: '',
  //     cardAttr1: '',
  //   };
  // }

  // onInputChange = (event) => {
  //   this.setState({
  //     [event.target.name]: event.target.value,
  //   });
  // };

  render() {
    // const { cardName, cardDescription, } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form />
      </div>
    );
  }
}

export default App;
