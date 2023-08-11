import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './global.scss';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Bernard ARROUES - Développeur fullstack à Quimper',
	description: 'Développeur fullstack Javascript/Typescript à Quimper,France',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body className={inter.className}>{children}</body>
		</html>
	);
}
