import { Component } from 'solid-js'

export type INavbarProps = {
	left?: JSX.Element,
	center?: JSX.Element,
	right?: JSX.Element
}

const Navbar: Component<INavbarProps> = ({ left, center, right }) =>
	<header class="navbar">
		{left || center || right ?
			<section class="navbar-section">
				{left || null}
			</section> : null}

		{center ?
			<section class="navbar-center">
				{center}
			</section> : null}

		{right || center ?
			<section class="navbar-section">
				{right || null}
			</section> : null}
	</header >


export default Navbar
