import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile, faFileExcel, faFilePowerpoint } from "@fortawesome/free-solid-svg-icons";

interface TypeFileProps {
    type: string;
    className?: string;
}


const TypeFile: React.FC<TypeFileProps> = ({
    type,
    className
}) => {
    return (
        <>
            {type === 'docx' && 
                <FontAwesomeIcon icon={faFile} className={className} />
            }
            {type === 'pptx' && 
                <FontAwesomeIcon icon={faFilePowerpoint} className={className} />
            }
            {type === 'xlsx' && 
                <FontAwesomeIcon icon={faFileExcel} className={className} />
            }
        </>
    );
}

export default TypeFile;