import { Component } from 'solid-js'

export type INavbarProps = {
	left?: JSX.Element,
	center?: JSX.Element,
	right?: JSX.Element
	style: string
}

const Navbar: Component<INavbarProps> = (props) => {
	const { left, center, right, style } = props
	return (
		<header class="navbar" style={style}>
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
		</header>
	)
}


export default Navbar
