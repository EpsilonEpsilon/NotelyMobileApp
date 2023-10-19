import type {CSSProp} from 'styled-components';
import theme from '../theme';

type ThemeType = typeof theme.light;

declare module 'styled-components/native' {
  export interface DefaultTheme extends ThemeType {}
}

declare module 'react' {
  interface DOMAttributes<T> {
    css?: CSSProp;
  }
}
