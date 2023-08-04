import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from '@fortawesome/fontawesome-svg-core'

interface AwesomeIconProps {
    icon: IconProp;
    className?: string;
    size?: string;
    color?: string
}


const AwesomeIcon: React.FC<AwesomeIconProps> = ({
    icon,
    className,
    size,
    color
}) => {
    return (
        <FontAwesomeIcon icon={icon} className={className?className:''} style={{ color: color, fontSize: size }} />
    );
}

export default AwesomeIcon;