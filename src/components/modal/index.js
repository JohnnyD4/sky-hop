import React from 'react';
import { Modal as ChakraModal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, ModalCloseButton } from '@chakra-ui/react';
import Modal from './Modal';

function ModalContainer({ toggleModal }) {
  return (
    <ChakraModal isOpen={true} onClose={toggleModal}>
			<ModalOverlay />
			<Modal toggleModal={toggleModal} />
    </ChakraModal>
  );
}

export default ModalContainer;
