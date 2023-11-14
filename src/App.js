import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import List from './pages/List';
import Create from './pages/Create';
import Detail from './pages/Detail';
import Title from './components/Title';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 600px;
  height: 60vh;
  margin: 160px auto 0;
  padding: 50px;
  background-color: white;
  border: 1px solid ${({ theme }) => theme.colors.ligteGrayD9};
  border-radius: 5px;
  box-shadow: -1px 0px 10px 0px ${({ theme }) => theme.colors.ligteGrayD9};
`;

const Content = styled.div`
  width: 100%;
`;

const App = () => {
  const [note, setNote] = useState(
    JSON.parse(localStorage.getItem('note')) || [],
  );
  useEffect(() => {
    localStorage.setItem('note', JSON.stringify(note));
  }, [note]);

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Container>
        <Title />
        <Content>
          <Routes>
            <Route path="/" element={<List note={note} />} />
            <Route path="/create" element={<Create setNote={setNote} />} />
            <Route
              path="/detail/:id"
              element={<Detail note={note} setNote={setNote} />}
            />
          </Routes>
        </Content>
      </Container>
    </BrowserRouter>
  );
};

export default App;
