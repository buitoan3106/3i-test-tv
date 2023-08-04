import Link from "next/link";
import Image from "next/image";

import NotificationImage from "@/public/images/admin/notification/man-with-laptop-light.png";

const Notification = () => {
    return (
        // <div className="flex flex-wrap items-center shadow-[0_0_0.375rem_0.25rem_rgba(161,172,184,.15)] rounded-[7px] p-[24px] hover:animate-flipInY hover:[transform-style: preserve-3d] transition duration-[700 400] ease-out">
        <div className="flex items-center justify-between shadow-[0_0_0.375rem_0.25rem_rgba(161,172,184,.15)] rounded-[7px] p-[24px]">
            <div>
                <h2 className="text-[#696cff]">Congratulations John! 🎉</h2>
                <p>You have done <strong>72%</strong> more sales today. Check your new badge in your profile.</p>
                <Link href={'/'}>View bag</Link>
            </div>
            <div><Image src={NotificationImage} alt={'NotificationImage'} height={140}/></div>
        </div>
    );
}

export default Notification;