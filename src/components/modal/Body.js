import React, { useRef } from 'react';
import {
  ModalBody,
  Box,
  FormLabel,
  Select,
  Radio,
  RadioGroup,
  Stack,
  Divider,
  Button,
  InputGroup,
  Text,
  Switch,
  Flex,
  Link,
} from '@chakra-ui/react';
import { AttachmentIcon, TimeIcon } from '@chakra-ui/icons';
import { secondary, success } from '../../theme';

const testingCenters = [
  {
    name: 'Testing Center 1',
    values: ['option 1'],
  },
  {
    name: 'Testing Center 2',
    values: ['option 2'],
  },
  {
    name: 'Testing Center 3',
    values: ['option 3'],
  },
  {
    name: 'Testing Center 4',
    values: ['option 4'],
  },
];

function Body() {
  const inputRef = useRef(null);

  const handleClick = () => inputRef.current?.click()
  return (
    <ModalBody display={'flex'} gap={'50px'} padding={'30px 90px'}>
      <Box w={'55%'}>
        <Select placeholder={'Select Import Name:'}>
          <option>Option 1</option>
          <option>Option 2</option>
        </Select>
        <Divider marginY={'20px'} w={'50%'} />
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
            <InputGroup >
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
          <Button colorScheme={'primary'}>Upload Manifest</Button>
        </Box>
        <Divider marginY={'20px'} />
        {/* TODO Add progress bar and full divider */}
        <Divider marginY={'20px'} w={'50%'} opacity={1} colorScheme={'primary'} />
        <FormLabel>Elapsed Data Checking:</FormLabel>
        <Text color={success}>No Elapsed Dates!</Text>
        <Divider marginY={'20px'} w={'50%'} opacity={1} colorScheme={'primary'} />
        <FormLabel htmlFor={'toleranceChecked'}>Tolerance Window:</FormLabel>
        <Flex alignItems={'center'} gap={'4px'}>
          <Switch colorScheme={'primary'} id={'toleranceChecked'} defaultChecked />
          <Text fontWeight={'200'}>Toggle ON | <TimeIcon fontSize={'18px'} /> Select Tolerance Level</Text>
        </Flex>
      </Box>
      <Box>
        <FormLabel>Split schedule using social distancing?</FormLabel>
        <RadioGroup defaultValue={'yes'}>
          <Stack direction={'row'}>
            <Radio size={'lg'} colorScheme={'white'} value={'yes'}>Yes</Radio>
            <Radio size={'lg'} colorScheme={'white'} value={'no'}>No</Radio>
          </Stack>
        </RadioGroup>
        <Divider marginY={'20px'} w={'50%'} opacity={1} colorScheme={'primary'} />
        <FormLabel>Location Checking:</FormLabel>
        <Text color={success}>All Available!</Text>
        <Divider marginY={'20px'} w={'50%'} opacity={1} colorScheme={'primary'} />
        <FormLabel>Client:</FormLabel>
        <RadioGroup defaultValue={'multiple'} marginBottom={'20px'}>
          <Stack direction={'row'}>
            <Radio size={'lg'} colorScheme={'white'} value={'single'}>Single</Radio>
            <Radio size={'lg'} colorScheme={'white'} value={'multiple'}>Multiple</Radio>
          </Stack>
        </RadioGroup>
        {testingCenters.map((center, index) => (
          <Flex
            key={index}
            justifyContent={'space-between'}
            alignItems={'center'}
            marginY={'10px'}
          >
            <Text>{center.name}</Text>
            <Flex alignItems={'center'} gap={'10px'}>
              <Select placeholder='Select Client'>
                {center.values.map((option, index) => (
                  <option key={index}>{option}</option>
                ))}
              </Select>
              <TimeIcon fontSize={'18px'} />
            </Flex>
          </Flex>
        ))}
      </Box>
    </ModalBody>
  );
};

export default Body;
