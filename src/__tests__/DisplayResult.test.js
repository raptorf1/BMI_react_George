import React from 'react';
import { shallow } from 'enzyme';
import DisplayResult from '../Components/displayResult';

describe('<DisplayResult />', () => {
  it('displays the calulation correct(metric)', () => {
    const component = shallow(<DisplayResult method='metric' weight='100' height='195' />)
    const response = <div id='response'>You are Overweight with a BMI of 26.3</div>
    expect(component.contains(response)).toEqual(true)
  })

  it('displays the calulation correct(imperial)', () => {
    const component = shallow(<DisplayResult method='imperial' weight='140' height='73' />)
    const response = <div id='response'>You are Underweight with a BMI of 18.47</div>
    expect(component.contains(response)).toEqual(true)
  })

  it('displays a message when one of the input fields are empty', () => {
    const component = shallow(<DisplayResult method='metric' weight='' height='195' />);
    expect(component.text()).toBe('Please fill in valid numbers')
  })
});
