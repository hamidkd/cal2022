//🚢
import React from 'react';
import styled from 'styled-components';
import Digit from './Digit';

//📦📦📦
const Number = ({children, number , ...otherProps }) => {

    const numberString = number + "";

    const numberArray = numberString.split("");


//➡️➡️➡️
return (
    <StyledDiv {...otherProps}>
      {numberArray.map(digit => {
          return (
              <Digit digit={digit} />
          )
      })}
    </StyledDiv>
)};
export default Number;
 
//💅💅💅
const StyledDiv = styled.div`

display: flex;
gap: 0.3rem;

.digit {
    height: 50px;
    display: block;
    
    
    &:nth-child(1) {
        /* height: 30px; */
        /* outline: 2px solid red; */
        /* opacity: 0.5; */
    }
}

`


