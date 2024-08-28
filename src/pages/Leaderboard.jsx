import { FaChevronLeft } from "react-icons/fa";
import { CiSettings } from 'react-icons/ci';
import { FaCheckCircle } from "react-icons/fa";
import Footer from "../components/Footer";
import girlImg from '../assets/images/girl.png';
import gemImg from '../assets/images/gem.png';
import crownImg from '../assets/images/crown.png';
import avatarImg from '../assets/images/avatar.png';

const Leaderboard = function () {
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
            <div className="mt-6">
                <div className="flex justify-center -translate-x-8 translate-y-8">
                    <img className="" src={crownImg} alt="crown image" />
                </div>
                <div className="flex">
                    <div className="flex justify-center flex-1 translate-y-12"><img src={girlImg} className="w-20 h-20" alt="avatar" /></div>
                    <div className="flex justify-center flex-1 translate-y-5"><img src={girlImg} className="w-20 h-20" alt="avatar" /></div>
                    <div className="flex justify-center flex-1 translate-y-12"><img src={girlImg} className="w-20 h-20" alt="avatar" /></div>
                </div>
                <div className="flex items-end">
                    <div className="flex flex-col items-center justify-center flex-1 gap-1 pt-3 pb-2 bg-blue-300 rounded-l-xl">
                        <div className="flex items-center justify-center w-5 h-5 text-xs -translate-y-2 bg-green-900 rounded-full">2</div>
                        <div className="text-sm">Anil</div>
                        <div className="font-bold">44.000.932</div>
                        <div className="flex items-center gap-1 text-blue-500">
                            <img src={gemImg} alt="gem image" /> 100
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center flex-1 gap-1 pt-3 pb-10 bg-white rounded-t-xl">
                        <div className="flex items-center justify-center w-5 h-5 text-xs -translate-y-1 bg-yellow-500 rounded-full">1</div>
                        <div className="text-sm text-blue-400">Anil</div>
                        <div className="font-bold text-blue-400">44.000.932</div>
                        <div className="flex items-center gap-1 text-blue-500">
                            <img src={gemImg} alt="gem image" /> 100
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center flex-1 gap-1 pt-3 pb-2 bg-blue-300 rounded-r-xl">
                        <div className="flex items-center justify-center w-5 h-5 text-xs -translate-y-2 bg-blue-900 rounded-full">3</div>
                        <div className="text-sm">Anil</div>
                        <div className="font-bold">44.000.932</div>
                        <div className="flex items-center gap-1 text-blue-500">
                            <img src={gemImg} alt="gem image" /> 100
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center gap-4 mt-5">
                <div className="flex-col items-center justify-center px-4 py-3 bg-blue-300 rounded-xl">
                    <div className="font-bold text-center">1.6K</div>
                    <div>Your Tokens &gt;</div>
                </div>
                <div className="flex-col items-center justify-center px-4 py-3 bg-blue-300 rounded-xl">
                    <div className="font-bold text-center">#4.7MK</div>
                    <div>Your Rank &gt;</div>
                </div>
            </div>
            <div className="flex justify-between py-3 mx-3 mt-10 mb-5 bg-blue-300 rounded-2xl">
                <div className="flex-1 text-center">Weekly</div>
                <div className="flex-1 text-center">Weekly</div>
                <div className="flex-1 text-center">Weekly</div>
            </div>
            <div>
                <div className="flex items-center justify-between px-3 py-2 border-b hover:bg-blue-300 hover:rounded-xl">
                    <div className="flex gap-2">
                        <img src={girlImg} alt="avatar image" className="w-12 h-12" />
                        <div>
                            <div className="flex items-center gap-2">deluxe <img src={gemImg} className="w-4 h-4" alt="gem image" /> <span className="text-blue-500">50</span></div>
                            <div className="text-blue-200">23.000.000</div>
                        </div>
                    </div>
                    <div className="font-bold">4</div>
                </div>
                <div className="flex items-center justify-between px-3 py-2 border-b hover:bg-blue-300 hover:rounded-xl">
                    <div className="flex gap-2">
                        <img src={girlImg} alt="avatar image" className="w-12 h-12" />
                        <div>
                            <div className="flex items-center gap-2">deluxe <img src={gemImg} className="w-4 h-4" alt="gem image" /> <span className="text-blue-500">50</span></div>
                            <div className="text-blue-200">23.000.000</div>
                        </div>
                    </div>
                    <div className="font-bold">4</div>
                </div>
                <div className="flex items-center justify-between px-3 py-2 bg-blue-200 border-b rounded-xl">
                    <div className="flex gap-2">
                        <img src={avatarImg} alt="avatar image" className="w-12 h-12" />
                        <div>
                            <div className="flex items-center gap-2 font-bold text-blue-500">deluxe <span className="px-2 text-xs text-white bg-blue-500 rounded">You</span></div>
                            <div className="text-blue-400">1.008</div>
                        </div>
                    </div>
                    <div className="font-bold text-blue-400">4.7M</div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Leaderboard;