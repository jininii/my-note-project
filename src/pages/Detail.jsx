import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import { BsTrash3 } from 'react-icons/bs';
import styled from 'styled-components';
import EditorContent from '../components/Edit/EditorContent';
import EditorInput from '../components/Edit/EditorInput';

const CreateSection = styled.div`
  height: 355px;
`;

const ButtonSection = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  height: 100%;
`;

const Detail = ({ note, setNote }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const noteItem = note.find(item => item.id == id);
  const [title, setTitle] = useState(noteItem.title);
  const [content, setContent] = useState(noteItem.content);

  const date = new Date();
  const createDate = `${date.getFullYear()}년 ${
    date.getMonth() + 1
  }월 ${date.getDate()}일`;

  const handleDelete = () => {
    const noteArr = note.filter(item => item.id !== id);
    setNote(noteArr);
    navigate('/');
  };

  const handleForm = e => {
    e.preventDefault();
    if (title && content) {
      const newNote = { ...note, id, title, content, createDate };
      const editNote = note.map(item => {
        if (item.id == id) {
          item = newNote;
        }
        return item;
      });
      setNote(editNote);
      navigate('/');
    }
  };

  return (
    <section>
      <CreateSection onSubmit={handleForm}>
        <EditorInput value={title} onChange={e => setTitle(e.target.value)} />
        <EditorContent
          value={content}
          onChange={e => setContent(e.target.value)}
        />
      </CreateSection>
      <ButtonSection>
        <Button $background="#2169d7" onClick={handleDelete}>
          <BsTrash3 color="white" />
        </Button>
        <Button $primary onClick={handleForm}>
          저장
        </Button>
        <Button
          $background={({ theme }) => theme.colors.lightGray}
          color="white"
          onClick={() => navigate(`/`)}
        >
          이전
        </Button>
      </ButtonSection>
    </section>
  );
};

export default Detail;
