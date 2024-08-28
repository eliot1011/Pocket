import { FaChevronLeft } from "react-icons/fa";
import { CiSettings } from 'react-icons/ci';
import { FaCheckCircle } from "react-icons/fa";
import { BiLinkAlt } from "react-icons/bi";
import inviteImg from '../assets/images/invite.png';
import coinImg from '../assets/images/coin.png';
import tonImg from '../assets/images/ton.png';
import handMoneyImg from '../assets/images/handmoney.png';
import Footer from "../components/Footer";

const Friends = function () {
    return (
        <div className="w-full min-h-screen px-10 pt-5 pb-32 bg-gradient-to-b from-blue-400 to-blue-300">
            <div className="flex justify-between">
                <a className="flex items-center">
                    <FaChevronLeft />
                    <div>Back</div>
                </a>
                <div className="flex flex-col items-center justify-center">
                    <div className="flex items-center gap-1">
                        <div className="text-sm">POCKET</div>
                        <FaCheckCircle />
                    </div>
                    <div className="text-[10px]">mini app</div>
                </div>
                <button>
                    <CiSettings size={30} />
                </button>
            </div>
            <div className="mt-3">
                <div className="relative z-10 flex justify-center">
                    <img src={inviteImg} alt="rocket image" />
                </div>
                <div className="pt-10 pb-5 text-center -translate-y-12 bg-blue-300 rounded-xl">
                    <div className="text-3xl font-bold">Invite friends</div>
                    <div className="text-sm">You and your friend will receive bonuses</div>
                </div>
            </div>
            <div className="mb-2 -mt-5 text-2xl">Earned</div>
            <div className="flex justify-around bg-blue-300 rounded-xl">
                <div className="flex items-center gap-2">
                    <img src={coinImg} alt="coin image" />
                    <span className="text-2xl font-bold">0</span>
                </div>
                <div className="flex items-center gap-2">
                    <img src={tonImg} alt="ton image" />
                    <span className="text-2xl font-bold">0</span>
                </div>
            </div>
            <div className="flex justify-between mt-5">
                <button className="px-5 py-2 font-bold text-blue-600 bg-white rounded-lg">Invite a friend</button>
                <button className="flex items-center gap-3 px-5 py-2 font-bold bg-blue-300 rounded-lg"><BiLinkAlt size={20} />Copy</button>
            </div>
            <div className="flex items-center gap-3 px-3 py-2 mt-5 border rounded-xl">
                <img src={handMoneyImg} alt="hand money image" />
                <div>
                    <div className="text-2xl font-bold">Invite a friend</div>
                    <div>1000 Tokens</div>
                </div>
            </div>
            <div className="flex items-center gap-3 px-3 py-2 mt-5 border rounded-xl">
                <img src={handMoneyImg} alt="hand money image" />
                <div>
                    <div className="text-2xl font-bold">Invite a friend with Telegram Premium</div>
                    <div>3000 Tokens</div>
                </div>
            </div>
            <div className="my-3 text-2xl font-bold">List of your friends</div>
            <div className="py-3 text-center bg-blue-300 rounded-xl">You haven't invited anyone yet.</div>
            <Footer />
        </div>
    );
}

export default Friends;