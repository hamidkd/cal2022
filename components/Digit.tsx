//🚢
import React from 'react';
import styled from 'styled-components';
import num1 from '../public/numbers/1.svg';
import num2 from '../public/numbers/2.svg';
import num3 from '../public/numbers/3.svg';
import num4 from '../public/numbers/4.svg';
import num5 from '../public/numbers/5.svg';
import num6 from '../public/numbers/6.svg';
import num7 from '../public/numbers/7.svg';
import num8 from '../public/numbers/8.svg';
import num9 from '../public/numbers/9.svg';
import num0 from '../public/numbers/0.svg';

//📦📦📦
const Digit = ({ children, digit, ...otherProps }) => {
  const nums = [num0, num1, num2, num3, num4, num5, num6, num7, num8, num9];
  //➡️➡️➡️
  return <img className='digit' src={`/numbers/${digit}.svg`} alt='X' />;
};
export default Digit;

//💅💅💅

