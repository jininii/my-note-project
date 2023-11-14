import React, { useState, useEffect } from 'react';
import NoteList from '../components/NoteList';
import Button from '../components/Button';
import SearchBar from '../components/SearchBar';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const ListSection = styled.div`
  margin: 15px 0;
  height: 275px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const EmptyNote = styled.p`
  margin-top: 120px;
  text-align: center;
  color: ${({ theme }) => theme.colors.darkGray};
`;

const ButtonSection = styled.div`
  display: flex;
  flex-direction: row-reverse;
  height: 100%;
`;

const List = ({ note }) => {
  const navigate = useNavigate();
  const [text, setText] = useState('');
  const [filteredNote, setFilteredNote] = useState(note);
  const [searched, setSearched] = useState(false);

  const handleSearch = () => {
    setFilteredNote(
      note.filter(noteItem => {
        if (noteItem.title.toLowerCase().match(text.toLocaleLowerCase())) {
          setSearched(true);
          return noteItem;
        }
      }),
    );
  };
  const handleChange = e => {
    setText(e.target.value);
    handleSearch();
  };

  useEffect(handleSearch, [text]);

  return (
    <section>
      <SearchBar value={text} onChange={handleChange} placeholder="검색" />
      <ListSection>
        {filteredNote.length > 0 ? (
          <>
            {filteredNote.map(noteItem => (
              <NoteList key={noteItem.id} note={noteItem} />
            ))}
          </>
        ) : (
          searched && <EmptyNote>다른 검색어를 입력하세요.</EmptyNote>
        )}
      </ListSection>
      <ButtonSection>
        <Button $primary onClick={() => navigate(`/create`)}>
          추가
        </Button>
      </ButtonSection>
    </section>
  );
};

export default List;
