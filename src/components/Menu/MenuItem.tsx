import { Component } from 'solid-js'

export type IMenuItemProps = {
	iconName?: string
	children: string
	badge?: string
}

export const MenuItem: Component<IMenuItemProps> = ({ iconName, badge, children }) =>
	<li class="menu-item">
		<a href="#">
			{iconName && [<i class={`icon icon-${iconName}`}></i>, " "]}
			{children}
		</a>
		{badge &&
			<div class="menu-badge">
				<label class="label label-primary">{badge}</label>
			</div>
		}
	</li>
