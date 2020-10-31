import { Component } from 'solid-js'

type Props = {
	badge?: true | string
	size?: "small" | "normal" | "large"
	leftIconName?: null | string
	rightIconName?: null | string
	style?: "normal" | "primary" | "link" | "success" | "error"
	children: any
}
type ChildProps = {
	"data-badge"?: string
}

const size_transformation = {
	"small": "btn-sm",
	"normal": "",
	"large": "btn-lg"
}
const Button: Component<Props> = ({ badge, size, leftIconName, rightIconName, style, children }) => {
	const childProps: ChildProps = {}
	const classList = ["btn"]
	if (size) {
		classList.push(size_transformation[size])
	}
	if (style && style !== "normal") {
		classList.push("btn-" + style)
	}
	if (badge) {
		classList.push("badge")
		if (typeof badge === "string") {
			childProps["data-badge"] = badge
		}
	}

	return <button class={classList.join(" ")} {...childProps}>
		{leftIconName && [<i class={`icon icon-${leftIconName}`} />, " "]}
		{children && children}
		{rightIconName && [" ", <i class={`icon icon-${rightIconName}`} />]}
	</button>
}

export default Button
