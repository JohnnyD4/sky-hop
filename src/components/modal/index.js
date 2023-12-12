import React from 'react';
import { Modal as ChakraModal, ModalOverlay } from '@chakra-ui/react';
import Modal from './Modal';

function ModalContainer({ toggleModal }) {
  return (
    <ChakraModal size={'5xl'} isOpen={true} onClose={toggleModal}>
			<ModalOverlay />
			<Modal toggleModal={toggleModal} />
    </ChakraModal>
  );
};

export default ModalContainer;
