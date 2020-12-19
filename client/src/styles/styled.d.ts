import "styled-componets";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;

    fonts: {
      secondary: string;
    };

    colors: {
      primary: string;
      secondary: string;
      warning: string;
      background: string;
      secondBackground: string;
      modalBackground: string;
    };

    borders: {
      primary: string;
      secondary: string;
    };
  }
}
