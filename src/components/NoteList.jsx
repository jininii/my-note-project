import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NoteItem = styled.div`
  margin-bottom: 16px;
  padding: 10px 15px;
  background-color: ${({ theme }) => theme.colors.superLightGray};
  border-radius: 10px;
  cursor: pointer;

  h1 {
    font-weight: bold;
    font-size: 18px;
  }
`;

const NoteList = ({ note }) => {
  return (
    <Link to={`/detail/${note.id}`}>
      <NoteItem>
        <h1>{note.title}</h1>
        <p>{note.content}</p>
      </NoteItem>
    </Link>
  );
};

export default NoteList;
