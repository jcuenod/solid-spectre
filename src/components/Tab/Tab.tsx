import { Component } from 'solid-js'

type ITabElement = {
	title: string
	badge?: string | boolean
	active?: boolean
	onClick?: any
}
type ITabObjects = {
	tabs: ITabElement[]
	onClick?: any
}
type ITabTitles = {
	tabs: string[]
	active: number
	onClick?: any
}
type ITabProps = ITabObjects | ITabTitles

const Tab: Component<ITabProps> = (props) => {
	let tabs: JSX.Element = null
	if (props.tabs.length) {
		if ("active" in props) {
			tabs = props.tabs.map((title, index) =>
				<li class={"tab-item" + (index === props.active ? " active" : "")} >
					<a href="#">{title}</a>
				</li >
			)
		}
		else {
			tabs = props.tabs.map(tab =>
				<li class={"tab-item" + (tab.active ? " active" : "")} onClick={tab.onClick}>
					<a href="#" class={tab.badge ? "badge" : ""} data-badge={typeof tab.badge === "string" ? tab.badge : null}>{tab.title}</a>
				</li>
			)
		}
	}
	return (
		<ul class="tab tab-block" onClick={props.onClick}>
			{tabs}
		</ul>
	)
}
export default Tab