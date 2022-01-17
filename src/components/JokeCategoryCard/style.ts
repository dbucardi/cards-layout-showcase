import styled from "styled-components";

export const StyledJokeCategoryCard = styled.div`
  width: 100%;
  height: 500px;
  display: block;
  perspective: 1000px;

  .card__inner {
    width: 100%;
    height: 100%;
    transition: transform 1s;
    transform-style: preserve-3d;
    cursor: pointer;
    position: relative;
  }

  .card__inner.card--flipped {
    transform: rotateY(180deg);
  }

  .card__face {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    overflow: hidden;
    border-radius: 16px;
    box-shadow: 0px 3px 18px 3px rgba(0, 0, 0, 0.2);
  }

  .card__face--front {
    background-image: linear-gradient(
      to bottom right,
      var(--primary),
      var(--secondary)
    );
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .card__face--front h2 {
    color: #fff;
    font-size: 32px;
  }

  .card__face--back {
    background-color: var(--light);
    transform: rotateY(180deg);
  }

  .card__content {
    width: 100%;
    height: 100%;
  }

  .card__header {
    position: relative;
    padding: 30px 30px 40px;
  }

  .card__header:after {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: linear-gradient(
      to bottom left,
      var(--primary) 10%,
      var(--secondary) 115%
    );
    z-index: -1;
    border-radius: 0px 0px 50% 0px;
  }

  .card__header h2 {
    color: #fff;
    font-size: 32px;
    font-weight: 900;
    text-transform: uppercase;
    text-align: center;
  }

  .card__body {
    padding: 30px;
  }

  .card__body h3 {
    color: var(--dark);
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 15px;
  }

  .card__body p {
    color: var(--dark);
    font-size: 18px;
    line-height: 1.4;
  }
`;

export const StyledSkillItem = styled.div`
  background-image: linear-gradient(
    to bottom left,
    var(--primary) 10%,
    var(--secondary) 115%
  );
  color: white;
  padding: 5px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;