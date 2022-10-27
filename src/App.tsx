import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Note } from './models/note.model';
import Header from './components/Header';
import NoteLists from './components/NoteLists';
import CreateNote from './components/CreateNote';
import { Container, Row, Col } from 'react-bootstrap';

function App() {
  const [notes, setNotes] = useState<Note[]>([{
    id: '2',
    title: "Meeting",
    text: 'Schedule Meeting with Team',
    color: '#dfdfdf',
    date: (new Date()).toString()
  },
  {
    id: '1',
    title: "Gaming",
    text: 'Schedule with Game Developement team',
    color: '#98e5d4',
    date: (new Date()).toString()
  }
  ]);
  return (
    <>
      <Header />
      <Container className='mt-5'>
        <Row>
          <Col>
            <NoteLists notes={notes} setNotes={setNotes} />
          </Col>
        </Row>
        <Row>
          <Col>
            <CreateNote notes={notes} setNotes={setNotes}/>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
