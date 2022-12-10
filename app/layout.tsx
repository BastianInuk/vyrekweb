import './globals.css'

import NavBar from './navbar'

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en'>
			<head />
			<body>
				<NavBar />
				{children}
			</body>
		</html>
	)
}

