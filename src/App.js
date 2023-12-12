import React, { useState } from 'react';
import Modal from './components/modal';
import { Button } from '@chakra-ui/react';

function App() {
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <>
      <Button onClick={toggleModal}>Open Modal</Button>
      {
        modalOpen && <Modal toggleModal={toggleModal} />
      }
    </>
  );
}

export default App;
