import { Component } from 'solid-js'

interface BaseAvatarProps {
    size?: "x-small" | "small" | "normal" | "large" | "x-large"
    iconSrc?: string
    iconAlt?: string
    presence?: true | "online" | "busy" | "away"
}
interface ImageAvatarProps extends BaseAvatarProps {
    src: string
    alt: string
}
interface InitialAvatarProps extends BaseAvatarProps {
    initial: string
}
type Props = ImageAvatarProps | InitialAvatarProps

const size_transformation = {
    "x-small": "avatar-xs",
    "small": "avatar-sm",
    "normal": "",
    "large": "avatar-lg",
    "x-large": "avatar-xl"
}

type ChildProps = {
    "data-initial"?: string
}

const Avatar: Component<Props> = (props) => {
    const children: any = []
    const childProps: ChildProps = {}
    const { size } = props

    // Main Image
    if ("src" in props) {
        const { src, alt } = props
        children.push(<img src={src} alt={alt} />)
    } else {
        childProps["data-initial"] = props.initial
    }

    // Image/Presence Badge
    if ("iconSrc" in props) {
        let alt = ""
        if ("iconAlt" in props && props.iconAlt) {
            alt = props.iconAlt
        }
        children.push(<img src={props.iconSrc} class="avatar-icon" alt={alt}></img>)
    } else if ("presence" in props && props.presence) {
        const iconClasses = ["avatar-presence"]
        if (props.presence !== true) {
            iconClasses.push(props.presence)
        }
        children.push(<i class={`avatar-presence ${props.presence}`}></i>)
    }

    return <figure class={`avatar ${size && size_transformation[size]}`} {...childProps}>
        {...children}
    </figure>
}

export default Avatar