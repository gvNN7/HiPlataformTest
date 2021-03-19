import React from 'react'
import ReactDom from 'react-dom';
import App from '../app.js';
import '@testing-library/jest-dom/extend-expect'
import { CustomContainer } from '../customContainer.js';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';

Enzyme.configure({ adapter: new Adapter() });

const mock = {
  id: "49569f0a-5292-4476-94b2-68df51acebe2",
  isChecked: false,
  isExpanded: false,
  level: 0,
  name: "Tim Roger Y.",
  children: [{
    id: "777888-5292-4476-94b2-9998566665abs2",
    isChecked: false,
    isExpanded: false,
    level: 1,
    name: "Tim Roger Z.",
    children: []
  }]
}


it("Renders without crashing", () => {
  const div = document.createElement('div');
  ReactDom.render(<App/>, div)
})

it("Receive props correctly", () => {
  const div = document.createElement('div');
  ReactDom.render(<CustomContainer self={new App()} parent={mock}/>, div)
})

it('Triggers onclick function', () => {
  const onButtonClick = sinon.spy();
  const e = { stopPropagation: jest.fn() };

  const wrapper = shallow(<CustomContainer self={new App()} parent={mock} />);
  wrapper.find('.container').simulate('click', e);

  
  expect(onButtonClick).toHaveProperty('callCount');
})