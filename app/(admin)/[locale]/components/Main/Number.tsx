import { IconType } from "react-icons";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { BsArrowUpShort } from "react-icons/bs";

interface NumberProps {
    title: string;
    number: string;
    growth: string;
    icon: IconType;
    action?: () => void;
    LinkPrimary?: string;
    LinkSecondary?: string;
    colorIcon?: string;
}

const Number: React.FC<NumberProps> = ({
    title,
    number,
    growth,
    icon: Icon,
    action,
    LinkPrimary,
    LinkSecondary,
    colorIcon
}) => {
    return (
        <div className="shadow-[0_0_0.375rem_0.25rem_rgba(161,172,184,.15)] rounded-[7px] p-[24px] relative">
            <div className="absolute top-[24px] right-[24px] z-100" onClick={action}>
                <BiDotsVerticalRounded/>
            </div>
            <div className={`inline-block border-[1px] border-[${colorIcon ? colorIcon : '#71dd37'}] rounded-[3px] p-[7px]`}><Icon size={20} className={`text-[${colorIcon ? colorIcon : '#71dd37'}]`}/></div>
            <h2 className="font-semibold text-[#566a7f] mt-[14px]">{title}</h2>
            <div className="mb-[8px] font-semibold text-[#566a7f] text-[26px]">{number}</div>
            <div className="text-[#71dd37] text-[12px]"><BsArrowUpShort size={12} className="inline-block align-middle mr-[3px]"/>{growth}</div>
        </div>
    );
}

export default Number;