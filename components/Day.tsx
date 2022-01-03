import styled from 'styled-components';
import Number from './Number';

export default function Day({ day }) {
  const { date, weekday, holiday } = day;
  const isHoliday = !!holiday || weekday === 'sun' || weekday === 'sat';
  return (
    <StyledDay className={isHoliday && 'holiday'}>
      <Number number={date} />
      <div className='details'>
        <span>{weekday}</span>
        {/* {holiday && <span>{holiday}</span>}  */}
      </div>
    </StyledDay>
  );
}
const StyledDay = styled.div`
  /* transform: scaleY(2); */
  /* outline: 2px solid pink; */
  width: 5rem;
  padding: 1rem 0.5rem;
  /* border-right: 1px solid black; */
  /* background: white; */
  font-size: 3rem;
  line-height: 0.8;
  /* font-family: 'pixel'; */
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 0.5rem;
  color: rgba(0, 0, 0, 1);
  opacity: 1;

  &.holiday {
    opacity: 0.4;
    /* padding-right: 10rem; */
    /* border-bottom: 1px solid rgba(0,0,0,0.3); */
  }

  &:last-child {
    padding-right: 6rem;
  }

  .details {
    width: 100%;
    /* outline: 1px solid brown; */
    flex: 1;
    font-size: 1rem;
    align-self: flex-start;
    display: flex;
    align-items: start;
    flex-direction: column;
    color: rgba(0, 0, 0, 0.8);
    font-size: 0.8rem;
    letter-spacing: 0.08em;
    font-family: 'evolventa';
    font-weight: 700;

    text-transform: capitalize;
/* 
    transform: rotate(90deg);
    transform-origin: top left; */
  }
`;
