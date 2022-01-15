import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
    fonts: {
        heading: 'Open Sans',
        body: 'Raleway',
    },
    colors: {
        brand: {
            primary: '#EF2F88',
            secondary: '#FFCD00',
            tertiary: '#FFF',
        }
    }
})


export default theme