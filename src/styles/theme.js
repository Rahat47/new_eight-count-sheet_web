import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
    fonts: {
        heading: 'Open Sans',
        body: 'Raleway',
    },
    colors: {
        brand: {
            primary: '#E60965',
            secondary: '#F94892',
            tertiary: '#FBE5E5',
        }
    }
})


export default theme