import React from 'react';
import styled from 'styled-components';

const Header = styled.div`
  height: 63px;
`;

const AppTitle = styled.h1`
  font-size: 26px;
  font-weight: bold;
`;

const AppDes = styled.p`
  color: ${({ theme }) => theme.colors.darkGray};
`;

const Title = () => {
  return (
    <Header>
      <AppTitle>My Note❤️</AppTitle>
      <AppDes>작은 노트장</AppDes>
    </Header>
  );
};

export default Title;
