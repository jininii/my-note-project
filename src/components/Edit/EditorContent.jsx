import React from 'react';
import styled from 'styled-components';

const Textarea = styled.textarea`
  height: calc(100% - 90px);
  width: 100%;
  font-size: 16px;
  resize: none;
  &:focus {
    outline: none;
  }
`;

const EditorContent = props => {
  return <Textarea {...props} placeholder="내용을 입력해주세요" />;
};

export default EditorContent;
