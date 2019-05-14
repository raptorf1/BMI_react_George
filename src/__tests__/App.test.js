import React from 'react';
import ReactDOM from 'react-dom';
import { mount, shallow } from 'enzyme';
import App from '../App';

describe('<App />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders header', () => {
    const component = shallow(<App />);
    const header = <h1>BMI Calculator</h1>;
    expect(component.contains(header)).toEqual(true);
  });

  it('shows metric as the standard method', () => {
    const component = shallow(<App />);
    const label = <option value="metric">METRIC (Weight in kg / Height in cm)</option>;
    expect(component.contains(label)).toEqual(true);
  });

  it('has another option forimperial method', () => {
    const component = shallow(<App />);
    const label = <option value="imperial">IMPERIAL (Weight in pounds / Height in inches)</option>;
    expect(component.contains(label)).toEqual(true);
  });

  it('has two methods to choose from', () => {
    const component = mount(<App />);
    const selector = component.find('#method').instance()
    expect(selector.options.length).toEqual(2)
  });

})
