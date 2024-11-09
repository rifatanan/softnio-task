import './globals.css';
import { Bebas_Neue, Roboto } from 'next/font/google';

// Configure Bebas Neue and Roboto fonts
const bebasNeue = Bebas_Neue({
    subsets: ['latin'],
    weight: '400', // Bebas Neue only supports 400
});

const roboto = Roboto({
    subsets: ['latin'],
    weight: ['400', '700'], // Add weights as needed
});

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={roboto.className}>{children}</body>
        </html>
    );
}
