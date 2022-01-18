import styled from 'styled-components';
import { IStyledInnerCardProps } from './interfaces';

export const StyledJokeCategoryCard = styled.div`
  display: block;
  width: 100%;
  height: 500px;
  perspective: 1000px;
`;

export const StyledInnerCard = styled.div<IStyledInnerCardProps>`
  width: 100%;
  height: 100%;
  transition: transform 1s;
  transform-style: preserve-3d;
  cursor: pointer;
  position: relative;
  transform: ${(props) => (props.flipped ? 'rotateY(180deg)' : 'none')};
`;

export const StyledCardBody = styled.div`
  padding: 30px;
  h3 {
    color: var(--dark);
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 15px;
  }
`;

export const StyledCardHeader = styled.div`
  position: relative;
  padding: 30px 30px 40px;
  &:after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: linear-gradient(to bottom left, var(--primary) 10%, var(--secondary) 115%);
    z-index: -1;
    border-radius: 0px 0px 50% 0px;
  }
  h2 {
    color: #fff;
    font-size: 26px;
    font-weight: 900;
    text-align: center;
  }
`;

const StyledCardFace = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  overflow: hidden;
  border-radius: 16px;
  box-shadow: 0px 3px 18px 3px rgba(0, 0, 0, 0.2);
`;

export const StyledCardFront = styled(StyledCardFace)`
  background-image: linear-gradient(to bottom right, var(--primary), var(--secondary));
  display: flex;
  align-items: center;
  justify-content: center;
  h2 {
    color: #fff;
    font-size: 32px;
  }
`;

export const StyledCardBack = styled(StyledCardFace)`
  background-color: var(--light);
  transform: rotateY(180deg);
`;

export const StyledSkillItem = styled.div`
  background-image: linear-gradient(to bottom left, var(--primary) 10%, var(--secondary) 115%);
  color: white;
  padding: 5px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;
