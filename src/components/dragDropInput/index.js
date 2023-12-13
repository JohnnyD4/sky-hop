import React, { useRef, useState } from 'react';
import { Box, Button, Divider, Flex, FormLabel, InputGroup, Link, Progress, Text } from '@chakra-ui/react';
import { AttachmentIcon, CalendarIcon } from '@chakra-ui/icons';
import prettyBytes from 'pretty-bytes';
import { secondary } from '../../theme';

function DragDropInput({ register, setValidImport }) {
  const inputRef = useRef(null);
  const [progress, setProgress] = useState(0);

  const handleClick = () => inputRef.current?.click();

  const uploadFile = () => {
    if (inputRef.current?.value) {
      let value = progress;
      let id = setInterval(() => {
        if (value >= 100) {
          clearInterval(id);
          setValidImport(true);
        } else {
          value += 5;
          setProgress(value);
        }
      }, 200);
      register('file', {value: inputRef.current?.files[0]});
    }
  };

  return (
    <>
      <FormLabel>Select a manifest that you would like to import</FormLabel>
      <Box
        display={'flex'}
        mt={'2'}
        alignItems={'center'}
        flexDirection={'column'}
        borderWidth={'1px'}
        borderRadius={'lg'}
        p={'15px'}
        gap={'4'}
      >
        <Box
          display={'flex'}
          alignItems={'center'}
          justifyContent={'center'}
          flexDirection={'column'}
          borderWidth={'1px'}
          borderRadius={'lg'}
          borderStyle={'dashed'}
          h={'100px'}
          w={'100%'}
          gap={'8px'}
          onClick={handleClick}
        >
          <InputGroup>
            <input
              type={'file'}
              multiple={false}
              hidden
              ref={(e) => {
                inputRef.current = e
              }}
            />
          </InputGroup>
          <AttachmentIcon color={secondary} />
          <p>Drag & Drop Here Or <Link fontWeight={'600'}>Browse</Link></p>
        </Box>
        <Button
          aria-label={'Upload Manifest'}
          colorScheme={'primary'}
          onClick={uploadFile}
        >
          Upload Manifest
        </Button>
      </Box>
      <Divider marginY={'20px'} />
        {inputRef?.current?.value ? (
            <Flex gap={'10px'} alignItems={'center'}>
              <CalendarIcon h={'24px'} w={'24px'} color={secondary} />
              <Box w={'100%'}>
                <Flex justifyContent={'space-between'}>
                  <Text>{inputRef.current?.files[0].name}</Text>
                  <Text>{prettyBytes(inputRef.current?.files[0].size)}</Text>
                </Flex>
                <Progress size={'xs'} w={'100%'} value={progress} colorScheme={'secondary'} />
              </Box>
            </Flex>
        ) : ''}
    </>
  )
};

export default DragDropInput;
