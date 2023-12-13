import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { ModalContent } from '@chakra-ui/react';
import Footer from './Footer';
import Body from './Body';
import Header from './Header';

function Modal({ toggleModal }) {
  const { handleSubmit, register } = useForm();
	const [validImport, setValidImport] = useState(false);

	const onSubmit = values => {
		console.log(values);
		alert('Successfully imported form.');
		toggleModal();
	};

  return (
		<ModalContent borderRadius={'20px'}>
			<Header toggleModal={toggleModal} />
      <form onSubmit={handleSubmit(onSubmit)}>
				<Body register={register} setValidImport={setValidImport} />
				<Footer toggleModal={toggleModal} validImport={validImport} />
			</form>
		</ModalContent>
  );
};

export default Modal;
