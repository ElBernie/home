import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';
import { Inter } from 'next/font/google';
import './global.scss';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Bernard ARROUES - Développeur fullstack à Quimper',
	description: 'Développeur fullstack Javascript/Typescript à Quimper, France',
	keywords: [
		'Bernard ARROUES',
		'Arroues',
		'Douarnenez',
		'Quimper',
		'Développeur Fullstack',
		'Télétravail',
		'Javascript',
		'Typscript',
	],
	
	creator: 'Bernard ARROUES',
	authors: [{ name: 'Bernard ARROUES', url: 'https://bernie.cool/' }],

};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='fr'>
			<body className={inter.className}>
				{children}
				<Analytics />
			</body>
		</html>
	);
}
