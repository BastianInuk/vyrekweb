'use client'

import { Navbar } from 'flowbite-react'

export default function NavBar() {
	return (
		<Navbar fluid={true} className='bg-gray-primary'>
			<Navbar.Collapse>
				<Navbar.Link href='/' active={true}>
					Home
				</Navbar.Link>
				<Navbar.Link href='/'>About</Navbar.Link>
			</Navbar.Collapse>
		</Navbar>
	)
}
