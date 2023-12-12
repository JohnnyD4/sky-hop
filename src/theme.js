import { createMultiStyleConfigHelpers, extendTheme } from '@chakra-ui/react';
import { radioAnatomy } from '@chakra-ui/anatomy';

const primary = '#082157';
const secondary = '#FF991F';
const success = '#80B992';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(radioAnatomy.keys);

const baseStyle = definePartsStyle({
  control: {
    _checked: {
      color: primary,
      borderColor: primary,
    },
  },
});

const radioTheme = defineMultiStyleConfig({ baseStyle });

export const theme = extendTheme({
  components: { Radio: radioTheme },
});
