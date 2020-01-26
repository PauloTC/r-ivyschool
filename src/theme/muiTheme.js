import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
    breakpoints: {
        keys: ["xs", "sm", "md", "lg", "xl"],
        values: {
            xs: 0,
            sm: 576,
            md: 768,
            lg: 992,
            xl: 1350
        }
    },
    typography: {
        fontFamily: 'Poppins !important',
        h6: {
            fontWeight : 600
        },
        caption: {
            display: 'block'
        }
    },
    overrides: {
        MuiCssBaseline: {
            '@global' : {
                '@font-face': 'Poppins'
            }
        }
    },
    palette: {
        primary: {
            light: '#63ccff',
            main: '#3AC569',
            dark: '#006db3',
            contrastText: '#fff',
        },
        secondary: {
            main: '#ff00a6'
        }
    }
})

export default theme;