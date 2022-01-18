import styled from 'styled-components';

export const StyledContainer = styled.div`
  box-sizing: border-box;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  padding-left: 15px;
  padding-right: 15px;
  max-width: 1200px;
  height: 100%;
  width: 100%;
`;

export const StyledMainContainer = styled(StyledContainer)`
  flex: 1 0 auto;
`;
