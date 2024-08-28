import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { PiUsersThreeBold } from "react-icons/pi";
import { SlHome } from "react-icons/sl";
import { TbMoneybag } from "react-icons/tb";
import { MdLeaderboard } from "react-icons/md";

const Footer = function () {
    return (
        <div className="fixed bottom-0 left-0 flex justify-between w-full p-5 px-10 bg-blue-200 rounded-t-3xl">
            <a href="/chat" className="flex flex-col items-center w-32">
                <IoChatboxEllipsesOutline size={20} />
                <span className="text-xs">Chat</span>
            </a>
            <a href="/friends" className="flex flex-col items-center w-32">
                <PiUsersThreeBold size={20} />
                <span className="text-xs">Friends</span>
            </a>
            <a href="/home" className="flex flex-col items-center w-32">
                <SlHome size={20} />
                <span className="text-xs">Home</span>
            </a>
            <a href="/earn" className="flex flex-col items-center w-32">
                <TbMoneybag size={20} />
                <span className="text-xs">Earn</span>
            </a>
            <a href="/leaderboard" className="flex flex-col items-center w-32">
                <MdLeaderboard size={20} />
                <span className="text-xs">Leaderboard</span>
            </a>
        </div>
    );
}

export default Footer;