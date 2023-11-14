import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
  height: 40px;
  width: 100%;
  margin: 10px 0;
  font-size: 20px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.mainColor};
  &:focus {
    outline: none;
  }
`;

const EditorInput = props => {
  return (
    <>
      <Input {...props} placeholder="✏️제목" />
    </>
  );
};

export default EditorInput;
