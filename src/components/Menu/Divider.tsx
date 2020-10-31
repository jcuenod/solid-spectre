import { Component } from 'solid-js'

export type IDividerProps = {
    content?: string
}

const Divider: Component<IDividerProps> = ({ content }) =>
    <li class="divider" data-content={content} />

export default Divider