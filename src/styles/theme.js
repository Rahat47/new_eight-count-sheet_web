import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
    fonts: {
        heading: 'Open Sans',
        body: 'Poppins',
    },
    colors: {
        brand: {
            primary: '#E60965',
            secondary: '#F94892',
            tertiary: '#FBE5E5',
            secondaryAlpha: 'rgba(249, 72, 146, 0.5)',
        }
    }
})


export default theme