import {Poppins} from 'next/font/google';

export const Poppins_init = Poppins({
    subsets : ['latin'],
    display : 'swap',
    variable : '--font-poppins',
    weight: ['300', '600']
})

export const poppins = Poppins_init.className;