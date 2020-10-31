import { Component } from 'solid-js'
import { IDividerProps } from './Divider'
import { IMenuItemProps } from './MenuItem'

type IMenuElement = Component<IDividerProps> | Component<IMenuItemProps>
type Props = {
    label: string
    active?: true | false
    children?: IMenuElement | IMenuElement[]
}

const DropdownMenu: Component<Props> = ({ label, active, children }) => {
    const dropdownClasses = ["dropdown"]
    if (active) {
        dropdownClasses.push("active")
    }
    return <div class={dropdownClasses.join(" ")}>
        <div class="btn-group">
            <a href="#" class="btn">
                {label}
            </a>
            <a href="#" class="btn dropdown-toggle" tabindex="0">
                <i class="icon icon-caret"></i>
            </a>
            <ul class="menu">
                {children}
            </ul>
        </div>
    </div>
}

export default DropdownMenu

