import styled from 'styled-components';
import { IStyledInnerCardProps } from './interfaces';

export const StyledJokeCategoryCard = styled.div`
  display: block;
  width: 300px;
  height: 450px;
  perspective: 1000px;
  margin: 0 auto;
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
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 15px;
  }
`;

export const StyledCardHeader = styled.div`
  position: relative;
  padding: 15px 15px 20px;
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
    margin-top: 30px;
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
  box-shadow: var(--card-box-shadow);
`;

export const StyledCardFront = styled(StyledCardFace)`
  background-image: linear-gradient(to bottom right, var(--primary), var(--secondary));
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.8;
  background-image: linear-gradient(135deg, var(--primary) 25%, transparent 25%),
    linear-gradient(225deg, var(--primary) 25%, transparent 25%),
    linear-gradient(45deg, var(--primary) 25%, transparent 25%),
    linear-gradient(315deg, var(--primary) 25%, var(--secondary) 25%);
  background-position: 10px 0, 10px 0, 0 0, 0 0;
  background-size: 10px 10px;
  background-repeat: repeat;

  h2 {
    color: black;
    background: var(--secondary);
    padding: 30px;
    font-size: 32px;
    width: 100%;
    text-align: center;
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
