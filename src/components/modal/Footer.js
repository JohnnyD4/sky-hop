import React from 'react';
import { ModalFooter, Button, Flex, Text } from '@chakra-ui/react';

function Footer({ toggleModal, validImport }) {
  return (
			<ModalFooter flexDirection={'column'}>
        {validImport && (
          <Text
            fontWeight={'700'}
            fontSize={'18px'}
            marginBottom={'20px'}
          >
            Data in the import file is correct. Please press continue to import.
          </Text>
        )}
        <Flex gap={'10px'} justifyContent={'center'} marginBottom={'40px'}>
          <Button type={'submit'} w={'200px'} colorScheme={'primary'}>Continue Import</Button>
          <Button w={'200px'} onClick={toggleModal} colorScheme={'secondary'} variant={'outline'}>Cancel</Button>
        </Flex>
			</ModalFooter>
  );
}

export default Footer;
