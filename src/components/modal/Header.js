import React from 'react';
import { IconButton, ModalHeader } from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';
import { primary, gray } from '../../theme';

function Header({ toggleModal }) {
  return (
		<>
      <IconButton
				colorScheme={'primary'}
				aria-label='Close Modal'
				w={'40px'}
				h={'40px'}
				margin={'30px 0 0 30px'}
				icon={<CloseIcon />}
				onClick={toggleModal}
			/>
			<ModalHeader
				textAlign={'center'}
				textDecoration={'underline'}
				textUnderlineOffset={'20px'}
				fontSize={'xx-large'}
				color={primary}
				textDecorationColor={gray}
				textDecorationThickness={'2px'}
				paddingTop={'0'}
			>
				Document Upload
			</ModalHeader>
    </>
  );
};

export default Header;
