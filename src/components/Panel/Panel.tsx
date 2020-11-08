import { Component } from 'solid-js'

type IBasePanelProps = {
	navigation?: JSX.Element,
	body?: JSX.Element,
	footer?: JSX.Element
}
interface IPanelHeader extends IBasePanelProps {
	header: JSX.Element
}
interface IPanelTitle extends IBasePanelProps {
	title: string
}
type IPanelProps = IPanelTitle | IPanelHeader

const Panel: Component<IPanelProps> = (props) => {
	let header: JSX.Element
	if ("title" in props) {
		header = <div class="panel-header">
			<div class="panel-title">{props.title}</div>
		</div>
	}
	else if (props.header) {
		header = props.header
	}
	return (
		<div class="panel">
			{header}
			{props.navigation ?
				<div class="panel-nav">
					{props.navigation}
				</div>
				: null}
			{props.body ?
				<div class="panel-body">
					{props.body}
				</div>
				: null}
			{props.footer ?
				<div class="panel-footer">
					{props.footer}
				</div>
				: null}
		</div>
	)
}

export default Panel
