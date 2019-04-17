import { createMuiTheme } from '@material-ui/core/styles'

const options: any = {
  palette: {
    primary: {
      main: '#632462',
    },
  },
  overrides: {
    MuiButton: {
      text: {
        border: 0,
        color: '#fff',
        minHeight: 40,
        minWidth: 114,
        paddingRight: 20,
        paddingLeft: 20,
        borderRadius: 4,
        fontWeight: 'bold',
        textTransform: 'none',
        boxShadow: 'inset 0 0.3px 0.5px 0 #c25995',
        background: 'linear-gradient(to bottom, #7c2463, #552462)',
      },
    },
    MuiRadio: {
      root: {
        padding: 0,
        margin: '3px 0px',
        borderRadius: '50%',
        background: '#fff',
        boxShadow: 'inset 0 0.5px 1.5px 0 #cccccc, inset 0 0 0.5px 0 #333333',
      },
    },
    MuiFormControlLabel: {
      root: {
        margin: 0,
        alignItems: 'flex-start',
      },
      label: {
        margin: 0,
        marginLeft: 10,
      },
    },
    MuiCheckbox: {
      root: {
        padding: 0,
        borderRadius: 2,
        margin: '4px 0',
        background: '#fff',
        boxShadow: 'inset 0 0.5px 1.5px 0 #cccccc, inset 0 0 0.5px 0 #333333',
        '&$checked': {
          boxShadow: 'none',
        },
      },
    },
    MuiExpansionPanel: {
      root: {
        borderRadius: 0,
        boxShadow: 'none',
      },
    },
    MuiExpansionPanelSummary: {
      root: {
        padding: 0,
        '&$expanded': {
          minHeight: 48,
        },
      },
      content: {
        '&$expanded': {
          margin: '12px 0',
        },
      },
      expandIcon: {
        right: -10,
        padding: 6,
        color: '#843a72',
      },
    },
    MuiExpansionPanelDetails: {
      root: {
        padding: 0,
        flexFlow: 'column',
      },
    },
    MuiInputBase: {
      root: {
        borderRadius: 4,
        background: '#fff',
        border: '1px solid',
        borderColor: 'transparent',
        boxShadow: 'inset 0 0.5px 1.5px 0 #ccc, inset 0 0 0.5px 0 #333',
        '&$error': {
          borderColor: '#d93c3c',
          boxShadow: 'inset 0 0.5px 1.5px 0 rgba(217, 60, 60, 0.25), inset 0 0 0.5px 0 #d93c3c',
        },
      },
    },
  },
  colors: {
    blackColor: '#000000',
    whiteColor: '#ffffff',
    darkPurple: '#632462',
    actionPurple: '#843a72',
    lightPurple: '#914e80',
    textDarkGrey: '#333333',
    textMain: '#404040',
    textGrey: '#4e4e4e',
    textSecondary: '#666666',
    textLightGrey: '#808080',
    warningRed: '#d93c3c',
    successGreen: '#4cac29',
    borderColor: '#c4c4c4',
    purpleAppBg: 'linear-gradient(to bottom, #9b2463, #312461)',
    purpleMain: 'linear-gradient(to bottom, #7c2463, #552462)',
    greyMain: 'linear-gradient(to bottom, #fefefe, #f2f2f2)',
  },
  typography: {
    useNextVariants: true,
    color: 'rgb(85, 85, 85)',
    textTransform: 'none',
    fontSizes: {
      mainTitle: 24,
      subTitle: 20,
      tableContentFont: 16,
      tableHeadFont: 12,
      buttonText: 14,
    },
    fontFamily: [
      '"Open Sans"',
      '"Montserrat"',
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
