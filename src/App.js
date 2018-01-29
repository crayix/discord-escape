import React, { Component } from 'react';
import pic from './pic.png';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.state1 = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    var text = this.state.value;
    text = text.replace(/\*/g,"\\*")
    console.log(text);
    text = text.replace(/\`/g, "\\`")
    console.log(text);
    text = text.replace(/\_/g, "\\_")
    console.log(text);

    ///fix first line
    
    var line = text.split('\n');
    line[0] = "_ _" + line[0];
    var text = line[0] + "\n";
    for(var i=1; i<line.length; i++) {
      text += line[i] + "\n";
    }

    this.setState({value: text });
    event.preventDefault();
  }
  

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={pic} className="App-logo" alt="logo" />
          <h1 className="App-title">Escape ASCII for Discord here</h1>
        </header>
        <div className="blankspace"></div>
        <form className="form-stuff" onSubmit={this.handleSubmit}>
          <label>            
            <textarea className="texts" rows="22" value={this.state.value} onChange={this.handleChange} />
          </label>
        <input className="submitbox" type="submit" value="escape" />
        </form>
      </div>
    );
  }
}

export default App;
