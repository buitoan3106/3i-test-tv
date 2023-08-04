import React, { useState } from 'react';
import Image from "next/image";
import ReactCardFlip from "react-card-flip";

interface FlipFlopProps {
    className?: string;
    flipDirection?: 'horizontal' | 'vertical'
    isFlipped?: boolean;
}

const FlipFlop: React.FC<FlipFlopProps> = ({
    className,
    flipDirection,
    isFlipped
}) => {
    const [flip, setFlip] = useState(isFlipped?isFlipped:false);

    const handleChange = () => {
        console.log('click');
        setFlip((prevState) => !prevState);
    };

    console.log(flip);

    return (
        <div className={`w-full border-[1px] border-[#038DC5] p-[10px] ${className}`}>
            <ReactCardFlip isFlipped={flip}
                flipDirection={flipDirection?flipDirection:'vertical'}>
                <div className="w-12/12 px-[15px] mt-[24px]" onClick={() => handleChange()} >
                    <div className="">
                        <Image src={"/images/admin/flip/flip1.png"} className="images_flip" width={0} height={0} style={{ width: "100%", height: "auto" }} alt="aaaa"></Image>
                    </div>
                </div>
                <div className="w-12/12 px-[15px] mt-[24px]" onClick={() => handleChange()}>
                    <div className="">
                        <Image src={"/images/admin/flip/flip2.png"} className="images_flip" width={0} height={0} style={{ width: "100%", height: "auto" }} alt="aaaa"></Image>
                    </div>
                </div>
            </ReactCardFlip>
        </div>
    );
}

export default FlipFlop;