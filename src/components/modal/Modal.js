import React from 'react';
import { ModalContent } from '@chakra-ui/react';
import Footer from './Footer';
import Body from './Body';
import Header from './Header';

function Modal({ toggleModal }) {
  return (
		<ModalContent borderRadius={'20px'}>
			<Header toggleModal={toggleModal} />
			<Body />
			<Footer />
		</ModalContent>
  );
};

export default Modal;
