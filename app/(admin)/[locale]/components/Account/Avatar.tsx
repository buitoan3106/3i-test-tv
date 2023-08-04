import Image from "next/image";

import AvatarImage from "@/public/images/admin/account/avatar.png"

const Avatar = () => {
    return (
        <>
            <div className="relative">
                <Image src={AvatarImage} width={40} height={40} alt="avatar" className="rounded-full"/>
                <span className="block absolute bottom-0 right-[3px] w-[10px] h-[10px] bg-[#71dd37] border-[2px] border-white rounded-full"></span>
            </div>
        </>
    );
}

export default Avatar;