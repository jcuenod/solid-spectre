import { Component } from 'solid-js'

interface IButtonProps {
	badge?: true | string
	size?: "small" | "normal" | "large"
	leftIconName?: null | string
	rightIconName?: null | string
	type?: "normal" | "primary" | "link" | "success" | "error"
	children: any
	onClick?(e: Event): any
	disabled?: boolean
}

const size_transformation = {
	"small": "btn-sm",
	"normal": "",
	"large": "btn-lg"
}

const Button: Component<IButtonProps> = (props: IButtonProps) => {
	const classList = ["btn"]
	if (props.size) {
		classList.push(size_transformation[props.size])
	}
	if (props.type && props.type !== "normal") {
		classList.push("btn-" + props.type)
	}

	return (
		<button
			class={classList.join(" ")}
			data-badge={props.badge ? props.badge : false}
			onClick={props.onClick}
			disabled={props.disabled}
		>
			{props.leftIconName && [<i class={`icon icon-${props.leftIconName}`} />, " "]}
			{props.children && props.children}
			{props.rightIconName && [" ", <i class={`icon icon-${props.rightIconName}`} />]}
		</button>
	)
}

export default Button
