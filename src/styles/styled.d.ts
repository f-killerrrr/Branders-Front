import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    color: {
      white: string;
      black: string;
      primary: {
        '500': string;
        '600': string;
        '700': string;
        '400': string;
        '300': string;
        '100': string;
        '50': string;
      };
      gray: {
        '900': string;
        '700': string;
        '500': string;
        '300': string;
        '100': string;
        '50': string;
      };
      state: {
        success: string;
        error: string;
        warning: string;
        info: string;
      };
    };
    text: {
      h1: {
        fontSize: string;
        fontWeight: string;
        lineHeight: string;
      };
      h2: {
        fontSize: string;
        fontWeight: string;
        lineHeight: string;
      };
      h3: {
        fontSize: string;
        fontWeight: string;
        lineHeight: string;
      };
      h4: {
        fontSize: string;
        fontWeight: string;
        lineHeight: string;
      };
      h5: {
        fontSize: string;
        fontWeight: string;
        lineHeight: string;
      };
      h6: {
        fontSize: string;
        fontWeight: string;
        lineHeight: string;
      };
      bodyLarge: {
        fontSize: string;
        fontWeight: string;
        lineHeight: string;
      };
      bodyMedium: {
        fontSize: string;
        fontWeight: string;
        lineHeight: string;
      };
      bodySmall: {
        fontSize: string;
        fontWeight: string;
        lineHeight: string;
      };
      caption: {
        fontSize: string;
        fontWeight: string;
        lineHeight: string;
      };
    };
  }
}
