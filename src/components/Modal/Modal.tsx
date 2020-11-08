import { Component } from 'solid-js'

export type IModalProps = {
	title?: string
	children: any
	footer?: JSX.Element | JSX.Element[]
	closeButton?: boolean
	clickAway?: boolean
	show: boolean
	hideEvent: () => any
}

const Modal: Component<IModalProps> = (props: IModalProps) => {
	const { title = "",
		closeButton = true,
		children,
		footer = undefined,
		clickAway = true,
		hideEvent } = props
	return <div class={`modal ${props.show ? "active" : null}`} id="modal-id">
		<a href="#close" class="modal-overlay" aria-label="Close" onClick={() => {
			if (clickAway) {
				hideEvent()
			}
		}}></a>
		<div class="modal-container">
			<div class="modal-header">
				{closeButton ?
					<a class="btn btn-clear float-right"
						aria-label="Close"
						onClick={hideEvent}></a> : null}
				<div class="modal-title h5">{title}</div>
			</div>
			<div class="modal-body">
				<div class="content">
					{children}
				</div>
			</div>
			{footer ?
				<div class="modal-footer">
					{footer}
				</div> : null}
		</div>
	</div>
}



export default Modal