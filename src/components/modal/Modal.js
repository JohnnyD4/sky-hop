import React from 'react';
import { ModalContent, ModalHeader } from '@chakra-ui/react';
import Footer from './Footer';
import Body from './Body';

function Modal({ toggleModal }) {
  return (
		<ModalContent>
			<ModalHeader>Document Upload</ModalHeader>
			<Body />
			<Footer />
		</ModalContent>
  );
}

export default Modal;
