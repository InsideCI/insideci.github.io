import React from 'react';
import Button from './Button';
import { shallow, ShallowWrapper } from 'enzyme';

describe('<Button /> tests', () => {
  const text = 'btn_text';
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(<Button text={text} />);
  });

  test('should render text', () => {
    expect(wrapper.find('.button').text()).toBe(text);
  });
});
