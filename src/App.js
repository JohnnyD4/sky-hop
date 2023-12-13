import React, { useState } from 'react';
import Modal from './components/modal';
import { Button, Center } from '@chakra-ui/react';

function App() {
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <Center h={'200px'}>
      <Button aria-label={'Open Modal'} onClick={toggleModal}>Open Modal</Button>
      {
        modalOpen && <Modal toggleModal={toggleModal} />
      }
    </Center>
  );
}

export default App;
