import { createMultiStyleConfigHelpers, extendTheme } from '@chakra-ui/react';
import { radioAnatomy } from '@chakra-ui/anatomy';

export const primary = '#082157';
export const secondary = '#FF991F';
export const success = '#80B992';
export const gray = '#DEDEDE';

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
  colors: {
    primary: {
      500: primary,
    },
    secondary: {
      500: secondary,
    },
    success: {
      500: success,
    },
    gray: {
      500: gray,
    },
  }
});
