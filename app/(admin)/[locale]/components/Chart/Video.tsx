import React from "react";

interface VideoProps {
    className?: string;
    type: string;
    src?: string;
    title?: string;
}

const Video: React.FC<VideoProps> = ({ 
    className, 
    type,
    src,
    title
}) => {
    return (
        <div className={`w-full ${className ? className : ''}`}>
            {type === "youtube" && 
                <iframe 
                    width="100%"
                    height="100%" 
                    src={src} 
                    title={title}
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowFullScreen
                    className="min-h-[300px]"
                ></iframe>
            }
            {type === "video/mp4" &&
                <video controls width="100%" height="100%" >
                    <source type="video/mp4" src={src} />
                </video>
            }
        </div>
    );
}

export default Video;