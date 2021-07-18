// import original module declarations
import 'styled-components';
import { DefaultTheme } from 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string;
    margin: {
      xxs: number;
      xs: number;
      s: number;
      m: number;
      l: number;
      xl: number;
      xxl: number;
    };
    padding: {
      xs: number;
      s: number;
      m: number;
    };
    fontSize: {
      xs: number;
      s: number;
      m: number;
      l: number;
    };
    colors: {
      green: {
        normal: string;
      };
      orange: {
        normal: string;
      };
      gray: {
        normal: string;
      };
    };
  }
}

export const myTheme: DefaultTheme = {
  borderRadius: '5px',
  margin: {
    xxs: 0.2,
    xs: 0.4,
    s: 0.6,
    m: 0.8,
    l: 1,
    xl: 1.2,
    xxl: 1.4,
  },
  padding: {
    xs: 0.2,
    s: 0.4,
    m: 0.6,
  },
  fontSize: {
    xs: 1.2,
    s: 1.4,
    m: 1.6,
    l: 1.8,
  },
  colors: {
    green: {
      normal: '#70AD47',
    },
    orange: {
      normal: '#F79646',
    },
    gray: {
      normal: '#636363',
    },
  },
};

// export { myTheme };

// import { DefaultTheme } from 'styled-components';

// export interface ThemeInterface {
//   colors: {
//     green: {
//       normal: string;
//     };
//     orange: {
//       normal: string;
//     };
//     gray: {
//       normal: string;
//     };
//   };
// }

// export const theme: DefaultTheme = {
//   colors: {
//     green: {
//       normal: '#70AD47',
//     },
//     orange: {
//       normal: '#F79646',
//     },
//     gray: {
//       normal: '#636363',
//     },
//   },
// };
