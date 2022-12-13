import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      header: string;
      primary: string;
      secondary: string;
      error: string;
      errorBackground: string;
      correct: string;
      correctBackground: string;
      link: string;
    };

    fontFamily: string;

    fontWeights: {
      regular: number;
      bold: number;
    };

    fontSize: {
      title: string;
      secondaryTitle: string;
      primary: string;
    };

    borderRadius: {
      primary: string;
      card: string;
    };

    screenDesktop: string;
  }
}
