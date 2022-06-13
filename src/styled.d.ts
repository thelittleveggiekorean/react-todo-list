import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    backgroundColor: string;
    textColor: string;
    accentColor: string;
  }
}