import { Component } from 'solid-js'
import { IDividerProps } from './Divider'
import { IMenuItemProps } from './MenuItem'

interface IMenuElement {
	children: IMenuItemProps | IDividerProps
}
interface Props {
	children: IMenuElement[]
}

const Menu: Component<Props> = ({ children }) =>
	<ul class="menu">{children}</ul>

export default Menu