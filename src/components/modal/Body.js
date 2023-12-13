import React from 'react';
import {
  ModalBody,
  Box,
  FormLabel,
  Select,
  Radio,
  RadioGroup,
  Stack,
  Divider,
  Text,
  Switch,
  Flex,
} from '@chakra-ui/react';
import { TimeIcon } from '@chakra-ui/icons';
import { success } from '../../theme';
import DragDropInput from '../dragDropInput';

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

function Body({ register, setValidImport }) {
  return (
    <ModalBody display={'flex'} gap={'50px'} padding={'30px 90px'}>
      <Box w={'55%'}>
        <Select placeholder={'Select Import Name:'} {...register('importDropdown')}>
          <option>Option 1</option>
          <option>Option 2</option>
        </Select>
        <Divider marginY={'20px'} w={'50%'} />
        <DragDropInput
          register={register}
          setValidImport={setValidImport}
        />
      <Divider marginY={'20px'} />
        <Divider marginY={'20px'} w={'50%'} opacity={1} colorScheme={'primary'} />
        <FormLabel>Elapsed Data Checking:</FormLabel>
        <Text color={success}>No Elapsed Dates!</Text>
        <Divider marginY={'20px'} w={'50%'} opacity={1} colorScheme={'primary'} />
        <FormLabel htmlFor={'toleranceChecked'}>Tolerance Window:</FormLabel>
        <Flex alignItems={'center'} gap={'4px'}>
          <Switch {...register('toleranceChecked')} colorScheme={'primary'} id={'toleranceChecked'} defaultChecked />
          <Text fontWeight={'200'}>Toggle ON | <TimeIcon fontSize={'18px'} /> Select Tolerance Level</Text>
        </Flex>
      </Box>
      <Box>
        <FormLabel>Split schedule using social distancing?</FormLabel>
        <RadioGroup defaultValue={'yes'} name={'splitSchedule'}>
          <Stack direction={'row'}>
            <Radio
                {...register('splitSchedule')}
                size={'lg'}
                colorScheme={'white'}
                value={'yes'}
              >
                Yes
              </Radio>
              <Radio
                {...register('splitSchedule')}
                size={'lg'}
                colorScheme={'white'}
                value={'no'}
              >
                No
              </Radio>
          </Stack>
        </RadioGroup>
        <Divider marginY={'20px'} w={'50%'} opacity={1} colorScheme={'primary'} />
        <FormLabel>Location Checking:</FormLabel>
        <Text color={success}>All Available!</Text>
        <Divider marginY={'20px'} w={'50%'} opacity={1} colorScheme={'primary'} />
        <FormLabel>Client:</FormLabel>
        <RadioGroup defaultValue={'multiple'} name={'client'} marginBottom={'20px'}>
          <Stack direction={'row'}>
            <Radio
              {...register('client')}
              size={'lg'}
              colorScheme={'white'}
              value={'single'}
            >
              Single
            </Radio>
            <Radio
              {...register('client')}
              size={'lg'}
              colorScheme={'white'}
              value={'multiple'}
            >
              Multiple
            </Radio>
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
              <Select placeholder='Select Client' {...register(`testingCenter${index + 1}`)}>
                {center.values.map((option, centerIndex) => (
                  <option key={centerIndex}>{option}</option>
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
