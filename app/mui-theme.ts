import { createMuiTheme } from '@material-ui/core/styles'

const options: any = {
  palette: {
    primary: {
      main: '#448aff',
      contrastText: '#fff',
    },
    secondary: {
      main: '#05957b',
      contrastText: '#fff',
    },
  },
  colors: {
    linkMain: '#448aff',
    whiteColor: '#fff',
    blackColor: '#000000',
    mainFontColor: '#545454',
    greyColor: '#999999',
    lightGreyColor: '#e2e2e2',
    borderColor: '#DBE2E8',
    blueBg: '#103E65',

    buttonBlue: '#448aff',
    buttonBlueHover: '#357AED',
    buttonGreen: '#09A78A',
    buttonGreenHover: '#09997F',
    buttonRed: '#F04640',
    buttonRedHover: '#DB3A35',
    buttonOrange: '#FF9F0E',
    buttonOrangeHover: '#E08B0A',
  },
  typography: {
    useNextVariants: true,
    color: 'rgb(85, 85, 85)',
    // Use the system font instead of the default Roboto font.
    fontSizes: {
      bigFontSize: 39,
      extraLargeFont: 24,
      titleFont: 20,
      largeFont: 18,
      mediumFont: 16,
      mainFont: 14,
      smallFont: 13,
      extraSmallFont: 12,
      smallSize: 10,
    },
    fontFamily: [
      'Roboto',
      'Open Sans',
      'Montserrat',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
}

export default createMuiTheme(options)
