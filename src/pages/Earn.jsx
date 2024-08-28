import { FaChevronLeft, FaTelegramPlane } from "react-icons/fa";
import { CiSettings } from 'react-icons/ci';
import { FaCheckCircle } from "react-icons/fa";
import { FcCalendar } from "react-icons/fc";
import { BsTwitterX } from "react-icons/bs";
import { CiWallet } from "react-icons/ci";
import rocketImg from '../assets/images/rocket.png';
import Footer from "../components/Footer";

const Earn = function () {
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
            <div className="flex items-center justify-between mt-3">
                <div>
                    <p className="text-2xl font-bold">Earn more coins</p>
                    <p className="text-[10px]">Make our tasks to get more coins</p>
                </div>
                <img src={rocketImg} alt="rocket image" />
            </div>
            <div>
                <div className="text-xl font-bold">Daily Task</div>
                <div className="flex justify-between py-3 border-b">
                    <div className="flex items-center gap-2">
                        <div className="flex items-center justify-center w-10 h-10 bg-blue-300 rounded-lg">
                            <FcCalendar size={20} />
                        </div>
                        <div>
                            <div className="text-[10px] text-blue-100">500 Tokens</div>
                            <div className="text-xs">Daily Reward</div>
                            <div className="text-[10px] text-blue-700">Get reward &gt;</div>
                        </div>
                    </div>
                    <button className="px-3 py-2 font-bold text-blue-600 bg-white rounded-xl">Redeem</button>
                </div>
                <div className="flex justify-between py-3 border-b">
                    <div className="flex items-center gap-2">
                        <div className="flex items-center justify-center w-10 h-10 bg-blue-300 rounded-lg">
                            <BsTwitterX size={20} />
                        </div>
                        <div>
                            <div className="text-[10px] text-blue-100">250 Tokens</div>
                            <div className="text-xs">Retweet our post</div>
                            <div className="text-[10px] text-blue-700">Get reward &gt;</div>
                        </div>
                    </div>
                    <button className="px-3 py-2 font-bold text-blue-600 bg-white rounded-xl">Redeem</button>
                </div>
            </div>
            <div>
                <div className="mt-10 text-xl font-bold">Task List</div>
                <div className="flex justify-between py-3 border-b">
                    <div className="flex items-center gap-2">
                        <div className="flex items-center justify-center w-10 h-10 bg-blue-300 rounded-lg">
                            <CiWallet size={20} />
                        </div>
                        <div>
                            <div className="text-[10px] text-blue-100">1000 Tokens</div>
                            <div className="text-xs">Wallet connect</div>
                            <div className="text-[10px] text-blue-700">Get reward &gt;</div>
                        </div>
                    </div>
                    <button className="px-3 py-2 font-bold text-blue-600 bg-white rounded-xl">Redeem</button>
                </div>
                <div className="flex justify-between py-3 border-b">
                    <div className="flex items-center gap-2">
                        <div className="flex items-center justify-center w-10 h-10 bg-blue-300 rounded-lg">
                            <FaTelegramPlane size={20} />
                        </div>
                        <div>
                            <div className="text-[10px] text-blue-100">300 Tokens</div>
                            <div className="text-xs">Join our TG channel</div>
                            <div className="text-[10px] text-blue-700">Get reward &gt;</div>
                        </div>
                    </div>
                    <button className="px-3 py-2 font-bold text-blue-600 bg-white rounded-xl">Redeem</button>
                </div>
                <div className="flex justify-between py-3 border-b">
                    <div className="flex items-center gap-2">
                        <div className="flex items-center justify-center w-10 h-10 bg-blue-300 rounded-lg">
                            <BsTwitterX size={20} />
                        </div>
                        <div>
                            <div className="text-[10px] text-blue-100">300 Tokens</div>
                            <div className="text-xs">Follow our X account</div>
                            <div className="text-[10px] text-blue-700">Get reward &gt;</div>
                        </div>
                    </div>
                    <button className="px-3 py-2 font-bold text-blue-600 bg-white rounded-xl">Redeem</button>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Earn;