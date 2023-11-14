import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import Button from '../components/Button';
import styled from 'styled-components';
import EditorInput from '../components/Edit/EditorInput';
import EditorContent from '../components/Edit/EditorContent';

const CreateSection = styled.form`
  height: 355px;
`;

const ButtonSection = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  height: 100%;
`;

const Create = ({ setNote }) => {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const date = new Date();
  const createDate = `${date.getFullYear()}년 ${
    date.getMonth() + 1
  }월 ${date.getDate()}일`;

  const handleSubmit = e => {
    e.preventDefault();

    if (title && content) {
      const note = { id: uuid(), title, content, createDate };
      setNote(prev => [note, ...prev]);
      navigate('/');
    }
  };

  return (
    <section>
      <CreateSection onSubmit={handleSubmit}>
        <EditorInput value={title} onChange={e => setTitle(e.target.value)} />
        <EditorContent
          value={content}
          onChange={e => setContent(e.target.value)}
        />
      </CreateSection>
      <ButtonSection>
        <Button $primary onClick={handleSubmit}>
          등록
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

export default Create;
