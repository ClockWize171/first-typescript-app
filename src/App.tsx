import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Note } from './models/note.model';
import Header from './components/Header';
import NoteLists from './components/NoteLists';
import { Container, Row, Col } from 'react-bootstrap';

function App() {
  const [notes, setNotes] = useState<Note[]>([{
    id: (new Date()).toString(),
    title: "Meeting",
    text: 'Schedule Meeting with Team',
    color: '#dfdfdf',
    date: (new Date()).toString()
  }]);
  return (
    <>
      <Header />
      <Container className='mt-5'>
        <Row>
          <Col>
            <NoteLists notes={notes} setNotes={setNotes} />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
