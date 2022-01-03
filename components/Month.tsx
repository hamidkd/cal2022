import styled from 'styled-components';
import Day from './Day';

export default function Month({ monthName, monthData }) {
  const days = [
    1,
    2,
    3,
    4,
    ,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    23,
    24,
    25,
    26,
    27,
    28,
    29,
    30,
    31,
  ];

  return (
    <StyledMonth>
      <MonthName>{monthName}</MonthName>
      {monthData.map((day) => (
        <Day day={day} />
      ))}
    </StyledMonth>
  );
}
const StyledMonth = styled.div`
  /* border-bottom: 0.2px solid rgba(0,0,0,0.1); */
  padding: 1rem 0 ;
  padding-left: 1rem;
  /* outline: 2px solid blue; */
  background-color: white;
  &:nth-child(2n) {
    /* background-color: #f8f8f8; */
    
  }
  &:nth-child(3n) {
  /* border-bottom: 0.2px solid rgba(0,0,0,0.1); */
}
/* background-color:  lightgray ; */
  display: flex;
  gap: 0.8rem;
    align-items: center;
`;

const MonthName = styled.h3`
  display: flex;
  align-items: center;
  /* justify-content: flex-end; */
  padding-inline: 1rem;
  font-size: 2rem;
  width: 7rem;

  letter-spacing: 0.2rem;
  font-family: 'lot';
  color: #b6b6b6;
`;
