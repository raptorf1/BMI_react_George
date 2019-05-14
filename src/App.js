import React, { Component } from 'react';
import DisplayResult from './Components/displayResult';
import { Container, Header, Icon } from 'semantic-ui-react'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weight: "",
      height: "",
      method: "metric"
    }
  }
  render() {
    return (
      <div>
        <Container>
          <Header as="h1">
            <Icon name="doctor" />
            <Header.Content>BMI Calculator</Header.Content>
          </Header>

          <select id="method" value={this.state.method} onChange={(e) => this.setState({ method: e.target.value })}>
            <option value="metric">METRIC (Weight in kg / Height in cm)</option>
            <option value="imperial">IMPERIAL (Weight in pounds / Height in inches)</option>
          </select>

          <div>
            <label>Weight</label>
            <input name="weight" value={this.state.weight} onChange={(e) => this.setState({ weight: e.target.value })} />
          </div>

          <div>
            <label>Height</label>
            <input name="height" value={this.state.height} onChange={(e) => this.setState({ height: e.target.value })} />
          </div>

          <DisplayResult
            weight={this.state.weight}
            height={this.state.height}
            method={this.state.method}
          />

        </Container>

      </div>
    );
  }
}

export default App;
