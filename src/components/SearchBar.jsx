import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const SearchInput = styled.input`
  width: 100%;
  height: 40px;
  border: 1px solid ${({ theme }) => theme.colors.ligteGrayD9};
  border-radius: 5px;
  margin-top: 10px;
  padding: 0 10px;

  &:focus {
    color: ${({ theme }) => theme.colors.darkGray};
    outline: none;
  }
`;

const SearchBar = props => {
  return <SearchInput {...props} placeholder="검색어를 입력해주세요." />;
};

export default SearchBar;
