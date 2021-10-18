import React from 'react';
import Rick from '../rick.png';
import styled from 'styled-components';

const Main = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-block: 1rem;
`;

const Header = () => {
  return (
    <Main>
      <img className="Rick-logo" src={Rick} alt="react logo" />
    </Main>
  )
}

export default Header
